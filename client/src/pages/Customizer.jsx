// REACT & LIBRARIES
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// FEATURES COMPONENTS
import { AIPicker, ColorPicker, FilePicker, Tab } from "../features";

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
  const { state } = useStateContext();

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
                  <Tab key={tab.name} tab={tab} onClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Customizer;
