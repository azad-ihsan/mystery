// src/MyModel.js
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function R7e(props) {
  const { scene, nodes, materials } = useGLTF("/models/r7e22.glb");

  useEffect(() => {
    console.log("GLTF Scene:", scene);
    console.log("Nodes:", nodes);
    console.log("Materials:", materials);
  }, [scene, nodes, materials]);

  // You can directly render the scene (with original textures/colors)
  return <primitive object={scene} {...props} />;
}

// Optional: preload the model
useGLTF.preload("/models/r7e22.glb");
