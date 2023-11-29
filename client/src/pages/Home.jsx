// REACT & LIBRARIES
import { motion, AnimatePresence } from "framer-motion";

// UI COMPONENTS
import { CustomButton } from "../ui";

// CONFIG
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../configs/motion";

// CONTEXTS
import { useStateContext } from "../contexts/state_context";

function Home() {
  const { state, setState } = useStateContext();

  return (
    <AnimatePresence>
      {state.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src={"/threejs.png"}
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style
              </p>

              <CustomButton
                type="filled"
                onClick={() =>
                  setState(prevState => ({ ...prevState, intro: false }))
                }
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              >
                Customize it
              </CustomButton>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
