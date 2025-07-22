import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1> Parent Component</h1>
        <ChildComponent showModal = {showModal} setShowModal = {setShowModal}/>
    </div>
  )
}

export default App