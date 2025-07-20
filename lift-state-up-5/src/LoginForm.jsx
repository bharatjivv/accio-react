import React, { useState } from 'react'

const LoginForm = ({setIsLoggedIn}) => {
    const [name, setName] = useState('');
    const [password, setPassword ] = useState('');
    
    const submitForm = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        console.log(name, password);
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <h2>Login Form</h2>
            <input
            type='text'
            placeholder='username'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
            type='password'
            placeholder='Password'
            password={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm