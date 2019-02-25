import React from 'react'
import { useField } from '../../hooks'
import LoginForm from './LoginForm'
import loginService from '../../services/login'
import Togglable from '../Togglable'

const Account = ({ user, setUser, blogService, pushMessage, pushError }) => {

  const username = useField('Username', 'text')
  const password = useField('Password', 'password')
  const { reset: uTmpReset, ...usernameProps } = username
  const { reset: pTmpReset, ...passwordProps } = password

  const loginFormRef = React.createRef()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })
      window.localStorage.setItem('loggedInUser', JSON.stringify(user))

      blogService.setTokenHeader(user.token)
      setUser(user)
      username.reset()
      password.reset()
      pushMessage(`User ${username.value} logged in.`)
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
      <div className='section-account'>
        <h2>Log in</h2>
        <Togglable buttonLabel='Login' ref={loginFormRef}>
          <LoginForm
            handleLogin={handleLogin}
            username={usernameProps}
            password={passwordProps} />
        </Togglable>
      </div>
    )
  }

  return (
    <>
    <div>{user.name} logged in.</div>
    <button onClick={handleLogout}>Log out</button>
    </>
  )
}

export default Account