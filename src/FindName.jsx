import React, { useState } from "react";
import audio from "../src/assets/e.mp3";
import { useNavigate } from "react-router-dom";

const FindName = ({ findName }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue === "E" || inputValue === "e") {
      navigate("/SecondLetter");
    }
  };
  return (
    <div
      className={`flex justify-center items-center flex-col h-[100vh]
  `}
    >
      <p className="text-white text-center text-2xl mb-8">find first letter</p>

      {/* <audio autoPlay loop>
        <source src={audio} type="audio/mpeg" />
      </audio> */}
      <input
        type="text"
        className="bg-white rounded-lg w-12 px-4 text-center"
        value={value}
        onChange={handleChange}
        maxLength={1}
      />
    </div>
  );
};

export default FindName;
