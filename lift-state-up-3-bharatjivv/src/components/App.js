import React, { useState } from "react";
import './../styles/App.css';
import ChildComponentOne from "./ChildComponentOne";
import ChildComponentTwo from "./ChildComponentTwo";

const App = () => {
  const [ selectedOption, setSelectedOption ] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <h1 className="parent">Parent Component</h1>
        <ChildComponentOne setSelectedOption = {setSelectedOption} />
        <ChildComponentTwo setSelectedOption = {setSelectedOption} />

        <p>Selected Option: {selectedOption} </p>
    </div>
  )
}

export default App