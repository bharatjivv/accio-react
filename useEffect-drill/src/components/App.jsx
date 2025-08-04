import React, { useState, useEffect } from 'react'
import Timer from './Timer'
import FetchData from './FetchData';

const App = () => {
  const [count , setCount ] = useState(0);
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count+1)} >Increment Count</button>
      <Timer />
      <FetchData />
    </div>
  )
}

export default App