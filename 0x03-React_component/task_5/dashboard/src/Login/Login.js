import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <div className="login">
        <p>Login to access the full dashboard</p>
        <label>Email
          <input type="email" id='email' />
        </label>
        <label >Password
          <input type="password" id='password' />
        </label>
        <button type="button">OK</button>
      </div>
    </>
  )
}

export default Login