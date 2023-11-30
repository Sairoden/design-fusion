// REACT & LIBRARIES
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// FEATURES COMPONENTS
import { AIPicker, ColorPicker, FilePicker, Tab } from "../features";

// UI COMPONENTS
import { CustomButton } from "../ui";

// CONTEXTS
import { useStateContext } from "../contexts/state_context";

// CONFIGS
import config from "../configs/config";
import { downloadCanvasToImage, reader } from "../configs/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../configs/constants";
import { fadeAnimation, slideAnimation } from "../configs/motion";

// ASSETS
import { download } from "../assets";

function Customizer() {
  const { state, setState } = useStateContext();

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // Show tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;

      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;

      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            onSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  const handleSubmit = async type => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      // Call our backend to generate an ai image
      setGeneratingImg(true);
      const res = await fetch(
        "https://sairoden-design-fusion.onrender.com/api/v1/dalle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await res.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (err) {
      alert(err.message);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = tabName => {
    switch (tabName) {
      case "logoShirt": {
        setState(prevState => ({
          ...prevState,
          isLogoTexture: !activeFilterTab[tabName],
        }));

        break;
      }

      case "stylishShirt": {
        setState(prevState => ({
          ...prevState,
          isFullTexture: !activeFilterTab[tabName],
        }));

        break;
      }

      default: {
        setState(prevState => ({
          ...prevState,
          isLogoTexture: true,
          isFullTexture: false,
        }));

        break;
      }
    }

    // After setting the state, activeFilterTab is updated
    setActiveFilterTab(prevState => ({
      ...prevState,
      [tabName]: !prevState[tabName],
    }));
  };

  const readFile = type => {
    reader(file).then(res => {
      handleDecals(type, res);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!state.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map(tab => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    onClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              onClick={() =>
                setState(prevState => ({ ...prevState, intro: true }))
              }
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            >
              Go Back
            </CustomButton>
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map(tab => (
              <Tab
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                key={tab.name}
                tab={tab}
                onClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Customizer;
