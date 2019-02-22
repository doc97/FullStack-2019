import React, { useState } from 'react'
import blogService from '../../services/blogs'

const BlogForm = ({blogs, setBlogs, pushMessage, pushError}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    const newBlog = { title, author, url }
    blogService
      .create(newBlog)
      .then((returnedBlog) => {
        pushMessage('Blog added')
        setBlogs(blogs.concat(returnedBlog))
        setTitle('')
        setAuthor('')
        setUrl('')
      })
      .catch(error => pushError(error.response.data.error))
  }

  return (
    <form onSubmit={addBlog}>
      <div>
        Title:
        <input
          value={title}
          name='Title'
          onChange={({target}) => setTitle(target.value)}
        />
      </div>
      <div>
        Author:
        <input
          value={author}
          name='Author'
          onChange={({target}) => setAuthor(target.value)}
        />
      </div>
      <div>
        URL:
        <input
          value={url}
          name='URL'
          onChange={({target}) => setUrl(target.value)}
        />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

export default BlogForm