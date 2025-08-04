import React, { useState } from 'react'
import './Tooltip.css'

const Tooltip = ({text, children}) => {
    const [visible, setVisible] = useState(false)
    
    const showTooltip = () => { setVisible(true)}
    const hideTooltip = () => { setVisible(false)}
    
    
    
  return (
    <div 
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className='tooltip'
    >
        {children}
        {visible && <span className='tooltiptext'>{text}</span>}
    </div>
  )
}

export default Tooltip