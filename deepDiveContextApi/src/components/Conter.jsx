import React, { useContext } from 'react'
import { CounterKaContext } from '../context/Counter'

const Conter = () => {
  const countState = useContext(CounterKaContext);

  // console.log('conter ke andr countstate', countState);
  
  
  return (
    <div>
        <button onClick={() => countState.setCount(countState.count+1)}>Increment</button>
        <button onClick={() => countState.setCount(countState.count -1)}>Decrement</button>
    </div>
  )
}

export default Conter