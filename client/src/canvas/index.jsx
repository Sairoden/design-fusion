/* eslint-disable react/no-unknown-property */
// REACT & LIBRARIES
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

// CANVAS
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

function CanvasModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
}

export default CanvasModel;
