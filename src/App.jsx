import { useState } from "react";

/* File: App.jsx */
function App() {
  let variableX = 100;
  const [state_variableX, set_variableX] = useState(0);
  const changeValue = () => {
    console.log("Function is called...");
    variableX = 200;
    set_variableX(500);
  };
  return (
    <div>
      <h1>Value of simple variable in JavaScript: {variableX}</h1>
      <h1>Value of state for variable {state_variableX}</h1>
      <button
        onClick={changeValue}
        className="bg-green-800 text-white p-2 m-2 cursor-pointer"
      >
        Change value
      </button>
    </div>
  );
}
export default App;
