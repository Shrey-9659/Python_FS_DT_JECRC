import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
        <form action="" className='form' onSubmit={handleSubmit}>
            <h2>Log in to chat</h2>
            <input
            className='form-input'
            type="text"
            name=""
            id=""
            placeholder='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <input
            className='form-input'
            type="password"
            name=""
            id="" 
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <p className='form-error'>{error}</p>
            <button type='submit' className='form-button'>Login</button>
            <p className='form-redirect'>
              Don't have an account
              <span 
              className='form-link'
              onClick={() => navigate("/register")}
              >Register</span></p>
        </form>
    </div>
  )
}

export default Login