import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Item name="Macbook" price={100000}/>
      <Item name="Pendrive" price={4000}/>
      <Item name="Mobile" price={35000}/>
      <Cart />
    </div>
  )
}

export default App