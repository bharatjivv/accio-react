import React from 'react'
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="You can have tooltip on a button">
        <button>Click me</button>
      </Tooltip>
      <br /><br/>
      <Tooltip text="You can have tooltip on a paragraph">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, laudantium.</p>
      </Tooltip>
      <br /><br/>

      <Tooltip text="You can have tooltip on a icon">
        <span>☠️</span>

      </Tooltip>
    </div>
  )
}

export default App