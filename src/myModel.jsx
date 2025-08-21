// src/MyModel.js
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function MyModel(props) {
  const { scene } = useGLTF("/models/myModel.glb");

  useEffect(() => {
    console.log("GLTF Scene:", scene);
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

// Optional: preload the model
useGLTF.preload("/models/myModel.glb");
