import React from 'react'
import BlogForm from './BlogForm'
import Blogs from './Blogs'

const BlogSection = ({blogs, setBlogs, pushMessage, pushError}) => (
  <>
  <h2>Add a blog</h2>
  <BlogForm
    blogs={blogs}
    setBlogs={setBlogs}
    pushMessage={pushMessage}
    pushError={pushError}
  />
  <Blogs blogs={blogs} />
  </>
)

export default BlogSection