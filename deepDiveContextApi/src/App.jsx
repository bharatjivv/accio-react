import React, { useContext } from 'react'
import Counter from './components/Conter';
import { CounterKaContext } from './context/Counter';

const App = () => {

  const counterState = useContext(CounterKaContext);

  return (
    <div>
      <h3>Count is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App