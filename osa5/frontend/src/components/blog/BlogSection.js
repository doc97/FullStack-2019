import React, { useState } from 'react'
import BlogForm from './BlogForm'
import Blogs from './Blogs'
import Togglable from '../Togglable'

const BlogSection = ({ user, blogs, blogService, pushMessage, pushError }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const blogFormRef = React.createRef()

  const onSubmit = (event) => {
    event.preventDefault()
    const newBlog = { title, author, url }
    blogService
      .create(newBlog)
      .then(() => {
        blogFormRef.current.toggleVisible()
        pushMessage('Blog added')
        setTitle('')
        setAuthor('')
        setUrl('')
      })
      .catch(error => pushError(error.response.data.error))
  }

  const handleTitleChange = ({ target }) => setTitle(target.value)
  const handleAuthorChange = ({ target }) => setAuthor(target.value)
  const handleUrlChange = ({ target }) => setUrl(target.value)

  return (
    <div className='section-blogs'>
      <h2>Add a blog</h2>
      <Togglable buttonLabel='New blog' ref={blogFormRef}>
        <BlogForm
          onSubmit={onSubmit}
          handleTitleChange={handleTitleChange}
          handleAuthorChange={handleAuthorChange}
          handleUrlChange={handleUrlChange}
          title={title}
          author={author}
          url={url} />
      </Togglable>
      <Blogs
        user={user}
        blogs={blogs}
        blogService={blogService}
        pushMessage={pushMessage}
        pushError={pushError} />
    </div>
  )
}

export default BlogSection