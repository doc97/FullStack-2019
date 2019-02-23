import React from 'react'
import Blog from './Blog'

const Blogs = ({blogs}) => {
  const blogElems = blogs.map(blog => <Blog key={blog.id} blog={blog} />)
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