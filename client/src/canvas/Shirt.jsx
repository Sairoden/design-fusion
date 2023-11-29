/* eslint-disable react/no-unknown-property */
// REACT & LIBRARIES
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

// CONTEXTS
import { useStateContext } from "../contexts/state_context";

function Shirt() {
  const { state } = useStateContext();
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(state.logoDecal);
  const fullTexture = useTexture(state.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
}

export default Shirt;
