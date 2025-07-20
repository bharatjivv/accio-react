import React, { useState } from 'react'
import LoginForm from './LoginForm';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  
  
  return (
    <div>
      <h1>Parent Component</h1>
      
      {
        isLoggedIn? (
          <p>Welcome User</p>
        ):
        (
          <LoginForm setIsLoggedIn = {setIsLoggedIn}/>
        )
      }
    </div>
  )
}

export default App