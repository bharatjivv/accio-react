import React from 'react'

const LoginCheck = ({isLoggedIn, name}) => {
  return (
    <div>
        <div>
        {
          isLoggedIn ? (
            <h2>Welcome, {name}</h2>
          ) : (
            <h2> Please LogIn to continue.</h2>
          )
        }
      </div>
    </div>
  )
}

export default LoginCheck