import React from 'react'

const ChildComponentTwo = ({setSelectedOption}) => {
  return (
    <div className='componentTwo'>
      <h2>ChildComponentTwo</h2> 
      <button onClick={() => {
        setSelectedOption('Option 2');
      }} >Option 2</button>
    </div>
  )
}

export default ChildComponentTwo    