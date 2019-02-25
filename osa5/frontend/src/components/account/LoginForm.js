import React from 'react'

const LoginForm = ({ handleLogin, username, password }) => (
  <form className='form-login' onSubmit={handleLogin}>
    <div>
      Username:
      <input {...username} />
    </div>
    <div>
      Password:
      <input {...password} />
    </div>
    <button type='submit'>Log in</button>
  </form>
)

export default LoginForm