import React, { useState } from 'react'

const Blog = ({blog, onClickLike}) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  const itemStyle = {
    marginBottom: 4,
    padding: 5,
    border: 'solid',
    borderWidth: 2,
    borderRadius: 4,
    listStyle: 'none',
  }
  const detailStyle = {
    display: expanded ? '' : 'none',
    marginTop: 8,
    lineHeight: '1.5em',
  }
  const likeButtonStyle = {
    marginLeft: 5
  }

  const header = () => (
    <div onClick={() => toggleExpanded()}>
      {blog.title} (by {blog.author})
    </div>
  )

  const details = () => (
    <div style={detailStyle}>
      {url()}
      {likes()}
      {user()}
    </div>
  )

  const url = () => {
    if (blog.url) {
      return (
        <div>
          <a href={blog.url}>{blog.url}</a>
          <br />
        </div>
      )
    }
    return null
  }

  const likes = () => (
    <div>
      {blog.likes} likes
      <button
        style={likeButtonStyle}
        onClick={() => onClickLike(blog)}>
        Like
      </button>
    </div>
  )

  const user = () => (
    <div>
      Added by { blog.user ? blog.user.name : 'Anonymous' }
    </div>
  )

  return (
    <li style={itemStyle}>
      {header()}
      {details()}
    </li>
  )
}

export default Blog