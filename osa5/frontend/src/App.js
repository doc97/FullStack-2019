import React, { useState, useEffect } from 'react'
import Account from './components/account/Account'
import BlogSection from './components/blog/BlogSection'
import Notification from './components/Notification'
import blogService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))  
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      blogService.setToken(user.token)
      setUser(user)
    }
  }, [])

  const pushMessage = (msg, timeoutMs=3000) => {
    setMessage(msg)
    setTimeout(() => setMessage(null), timeoutMs)
  }

  const pushError = (err, timeoutMs=3000) => {
    setError(err)
    setTimeout(() => setError(null), timeoutMs)
  }

  return (
    <div>
      <h1>Blog listing</h1>
      <Notification message={message} error={error} />

      <Account
        user={user}
        setUser={setUser}
        pushMessage={pushMessage}
        pushError={pushError}
      />

      { user !== null &&
        <BlogSection
          user={user}
          blogs={blogs}
          setBlogs={setBlogs}
          pushMessage={pushMessage}
          pushError={pushError}
        />
      }
    </div>
  )
}

export default App