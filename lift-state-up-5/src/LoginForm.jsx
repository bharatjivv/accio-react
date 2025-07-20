import React from 'react'

const LoginForm = ({setIsLoggedIn}) => {

    const submitForm = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <h2>Login Form</h2>
            <input
            type='text'
            placeholder='username'
            />
            <br />
            <input
            type='password'
            placeholder='Password'
            />
            <br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm