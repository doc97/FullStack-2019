import React from 'react'
import BlogForm from './BlogForm'
import Blogs from './Blogs'
import Togglable from '../Togglable'

const BlogSection = ({blogs, setBlogs, pushMessage, pushError}) => (
  <>
  <h2>Add a blog</h2>
  <Togglable buttonLabel='New blog'>
    <BlogForm
      blogs={blogs}
      setBlogs={setBlogs}
      pushMessage={pushMessage}
      pushError={pushError}
    />
  </Togglable>
  <Blogs blogs={blogs} />
  </>
)

export default BlogSection