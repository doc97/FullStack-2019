import React, { useState, useEffect } from 'react'
import Account from './components/account/Account'
import BlogSection from './components/blog/BlogSection'
import Notification from './components/Notification'
import { useResource } from './hooks'

const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const [blogs, blogService] = useResource('/api/blogs')

  useEffect(() => {
    blogService.getAll()
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      blogService.setTokenHeader(user.token)
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
        blogService={blogService}
        pushMessage={pushMessage}
        pushError={pushError}
      />

      { user !== null &&
        <BlogSection
          user={user}
          blogs={blogs}
          blogService={blogService}
          pushMessage={pushMessage}
          pushError={pushError}
        />
      }
    </div>
  )
}

export default App