// import React from 'react'

// const Greetings = (props) => {
//   return (
//     <div>
//          <p> Passed down as props.</p>
//          Welcome, {props.name} !
//      </div>
//   )
// }

// export default Greetings

import React from 'react'

const Greetings = ({name}) => {
  return (
    <div>
        <p>Passed down through destructuring.</p>
        Greetings, {name} !
    </div>
  )
}

export default Greetings