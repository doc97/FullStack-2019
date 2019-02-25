import React from 'react'
import Blog from './Blog'

const Blogs = ({ user, blogs, blogService, pushMessage, pushError }) => {
  const onClickLike = (blog) => {
    const updatedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    const id = updatedBlog.id
    blogService
      .update(id, updatedBlog)
      .then((returnedBlog) => {
        pushMessage(`Liked '${returnedBlog.title}'.`)
      })
      .catch((error) => {
        pushError(error.response.data.error)
      })
  }

  const onClickRemove = (blog) => {
    if (window.confirm(`Remove blog '${blog.title}, by ${blog.author}'?`)) {
      const id = blog.id
      blogService
        .remove(id)
        .then(() => {
          pushMessage(`Removed blog '${blog.title}'.`)
        })
        .catch(() => {
          pushError('Blog was already removed')
        })
    }
  }

  blogs.sort((a, b) => b.likes - a.likes) // more likes first
  const blogElems = blogs.map(blog => (
    <Blog
      key={blog.id}
      user={user}
      blog={blog}
      onClickLike={onClickLike}
      onClickRemove={onClickRemove}
    />
  ))

  const ulStyle = { paddingInlineStart: '10px' }

  return (
    <div>
      <h2>Blogs</h2>
      <ul style={ulStyle}>
        {blogElems}
      </ul>
    </div>
  )
}

export default Blogs