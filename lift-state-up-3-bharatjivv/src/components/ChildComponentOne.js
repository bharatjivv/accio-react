import React from 'react'

const ChildComponentOne = ({setSelectedOption}) => {
  return (
    <div className='componentOne'>
      <h2>ChildComponentOne</h2>
      <button onClick={() => {
        setSelectedOption('Option 1');
      }} >Option 1</button>
    </div>
  )
}

export default ChildComponentOne