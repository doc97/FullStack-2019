import React, { useState } from 'react'
import LoginForm from './LoginForm'
import blogService from '../../services/blogs'
import loginService from '../../services/login'

const Account = ({user, setUser, pushMessage, pushError}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({username, password})
      window.localStorage.setItem('loggedInUser', JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      pushMessage(`User ${username} logged in.`)
    } catch (error) {
      pushError('Username or password is incorrect!')
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser')
    blogService.setToken(null)
    setUser(null)
  }

  if (user === null) {
    return (
      <>
      <h2>Log in</h2>
      <LoginForm
        handleLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      </>
    )
  }

  return (
    <>
    <div>{user.name} logged in.</div>
    <button onClick={() => handleLogout()}>Log out</button>
    </>
  )
}

export default Account