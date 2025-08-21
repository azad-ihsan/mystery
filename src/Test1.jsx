import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ThreeD from "./threeD";
import { PointLight } from "three/src/Three.Core.js";

function RotatingModel({ targetY = 0 }) {
  const modelRef = useRef(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // speed of rotation
    }
  });

  return <ThreeD ref={modelRef} scale={3} position={[0, -3.2, 0]} />;
}

const Test = () => {
  return (
    <div className="w-full h-screen bg-dark flex justify-center items-center ">
      <div className="h-[100vh] absolute inset-0 w-full bg-black/60 z-50 pointer-events-none">
        {/* <div className="bg-black absolute top-0 h-[28rem] w-full"></div>
        <div className="bg-black absolute bottom-0 h-[35rem] w-full"></div> */}
      </div>
      <div className="w-[20rem] overflow-hidden aspect-auto h-[40rem] border border-white rounded-full ">
        <Canvas>
          {/* strong global light */}
          <ambientLight intensity={3} />

          {/* brighter directional light */}
          <directionalLight position={[20, 10, 10]} intensity={0.5} />

          {/* fill lights from different sides */}
          <pointLight position={[0, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          <Suspense fallback={null}>
            <RotatingModel />
          </Suspense>

          <OrbitControls enableZoom={true} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Test;
