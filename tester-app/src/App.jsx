import React, {useState} from 'react'
import './App.css'
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogin = () => {
      setIsLoggedIn(true);
    }
    
  return (
    <>
     {isLoggedIn ? (
                  <h1>Welcome user, Logged in!</h1>
                ): (<LoginForm onLogin={handleLogin} />
     
      )}
    </>
  )
}

export default App
