import React, { useState } from "react";
import './../styles/App.css';
import Child from './Child';

const App = () => {
  const [ inputValue, setInputValue ] = useState('')
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p>{inputValue}</p>
        <Child value={inputValue} setInputValue = {setInputValue} />
    </div>
  )
}

export default App