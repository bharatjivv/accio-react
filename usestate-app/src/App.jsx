import { useEffect } from "react";
import { useState } from "react"
import React  from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [om, setOm] = useState(100);

  console.log('num is : ', num, 'om is : ', om);

  // some complex code / api call
  useEffect( () => {
    console.log('i am complex');
  }, [om])


  return (
    <div>
      <p>{num}</p>

      <button onClick={() => { 
        setNum(num+1)
        }}> Increment</button>
        <button onClick={() => { 
                setNum(num-1)
                }}> Decrement</button>

      <button onClick={() => {
        setNum(0)
      }}>
        Clear
      </button>

      <p> {om}</p>
      <button onClick={ () => {
        setOm(om+100)
      }}>Increment Om</button>
    </div>
  )
}

export default App