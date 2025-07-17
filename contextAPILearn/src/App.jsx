// import React from 'react'
// import C1 from './components/C1'

// const App = () => {
//   // The data created will be used inside C3 component directly 
//   const dataaaa = "I am just a Dataaa!!!!";
  
//   return (
//     <div style={{width: "100%", height:"100vh", backgroundColor:'magenta', padding: '1rem' }}>App
//       <C1 data={dataaaa}/>
//     </div>
//   )
// }

// export default App


// Now we will use Context API  for the same work
import React, {createContext} from 'react'
import C1 from './components/C1';
const data = "I am just another data!!!"
export const UserKaContext = createContext();

const App = () => {
  return (
    <UserKaContext.Provider value={data}>
      <div>
        App chala diya firse!!
        <C1 />
      </div>
    </UserKaContext.Provider>
    
  )
}

export default App