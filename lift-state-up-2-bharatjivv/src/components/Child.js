import React, { useState } from 'react'

const Child = ({value, setInputValue}) => {

    return (
    <div className='child'>
      <h2> Child Component</h2>
        <input 
            type='text'
            value={value}
            onChange={(e) => {
                setInputValue(e.target.value) 
            }}
            placeholder='type something...'
        />

    </div>
  )
}

export default Child