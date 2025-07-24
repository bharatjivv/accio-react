import React from 'react'

const Button = ({onclick}) => {
  return (
    <div>
        <button style={{padding:'2px', margin:'10px'}} onDoubleClick={onclick}>Click Me!</button>
    </div>
  )
}

export default Button