import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "./MyModel";
import * as THREE from "three";
import FindName from "./FindName";
import { useNavigate } from "react-router-dom";

function RotatingModel({ targetY }) {
  const modelRef = useRef();

  useFrame(() => {
    if (!modelRef.current) return;

    // Smoothly animate rotation.y toward targetY
    modelRef.current.rotation.y +=
      (targetY - modelRef.current.rotation.y) * 0.02; // slow + smooth
  });

  return <MyModel ref={modelRef} scale={35} position={[0, -6, 0]} />;
}

function App() {
  const navigate = useNavigate();

  const [targetY, setTargetY] = useState(1.4); // initial Y rotation in radians

  const [isHoverd, setIsHoverd] = useState(false);
  const [findName, setFindName] = useState(false);

  const handleClick = () => {
    setTargetY(0.7); // smoothly rotate to this Y angle
    setTimeout(() => {
      setFindName(true);
      navigate("/FindName");
    }, 2500);
  };

  const hoverTimeout = useRef(null);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHoverd(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoverd(false);
    }, 3000);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50  w-full h-full  transition-all  duration-700 ease-in delay-100 bg-black
    ${
      findName
        ? "opacity-100 bg-black pointer-events-auto"
        : "opacity-0  pointer-events-none"
    }`}
      ></div>

      <div className="flex items-center justify-between h-[100vh] max-w-[50rem] mx-auto  gap-12 relative">
        <div
          className={`absolute top-8 left-1/2 -translate-x-1/2 text-2xl transition-all duration-1000
        ${isHoverd ? "opacity-100" : "opacity-0"}
        `}
        >
          <h2 className="text-white">her name</h2>
        </div>
        <div className="w-fit h-full flex justify-center items-center flex-col">
          <button
            className="text-white text-6xl cursor-pointer hover:shadow-2xs hover:shadow-white duration-500 transition-all whitespace-nowrap   "
            onClick={() => {
              handleClick();
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Find Out
          </button>
        </div>
        <div
          className={`h-full w-full transition-all duration-1000
          ${findName ? "ml-12" : ""}`}
        >
          <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-900, 0, 50]} intensity={1} />

            <Suspense fallback={null}>
              <RotatingModel targetY={targetY} />
            </Suspense>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;

// import { useControls } from "leva";

// 4.8 -.61

// const { rotation } = useControls({
//   rotation: {
//     value: 0,
//     min: -4,
//     max: 10,
//     step: 0.1,
//   },
// });

// <Text
// position={[0, 10, 0]}
// fontSize={3}
// color="orange"
// lineHeight={1}
// letterSpacing={0.02}
// textAlign="center"
// anchorX="center"
// anchorY="middle"
// >
// 4MB SOFT
// </Text>
// <Text
// position={[0, 5, 0]}
// fontSize={1}
// color="orange"
// maxWidth={30}
// letterSpacing={0.02}
// textAlign="center"
// anchorX="center"
// anchorY="middle"
// >
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
// delectus non ipsa sit ipsam animi reprehenderit debitis.
// Voluptatibus, eum sit. Repellat quas repellendus odit, sit at
// numquam. Repellendus, quam dolore.
// </Text>

{
  /* <div>
        <h1 className="text-[#f5b41a] text-center text-6xl font-bold pt-24">
          4MB SOFT
        </h1>
        <p className="text-[#f5b41a]/80 text-center pt-12 text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, delectus
          non ipsa sit ipsam animi reprehenderit debitis. Voluptatibus, <br />{" "}
          eum sit. Repellat quas repellendus odit, sit at numquam. Repellendus,
          quam dolore.
        </p>
      </div> */
}
