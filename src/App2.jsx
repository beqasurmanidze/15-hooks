import React, { useState } from "react";
import "./App.css";
const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const togglelight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={` container ${isOn ? "light-on" : "light-off"}`}>
      <p> light is {isOn ? "on" : "off"} </p>
      <button onClick={togglelight}>turn {isOn ? "off" : "on"}</button>
    </div>
  );
};

export default App2;
