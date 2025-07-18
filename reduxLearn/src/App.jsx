import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue } from './state/counterSlice';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment By One</button>
        <button onClick={() => dispatch(decrement())}>Decrement By One</button>

        <button onClick={() => dispatch(incrementByValue(10))}>Increment By 10</button>
      </div>
    </div>
  )
}

export default App