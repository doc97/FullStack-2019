import React from 'react'
import Blog from './Blog'

const Blogs = ({blogs}) => {
  const blogElems = blogs.map(blog => <Blog key={blog.id} blog={blog} />)
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogElems}
      </ul>
    </div>
  )
}

export default Blogs