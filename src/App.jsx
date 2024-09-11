import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("hello world");
    setCount((prev) => prev + 10);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>button</button>
    </>
  );
}

export default App;
