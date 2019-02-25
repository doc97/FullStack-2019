import React, { useState } from 'react'

const Blog = ({ user, blog, onClickLike, onClickRemove }) => {
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
  const removeButtonStyle = {
    marginTop: 8
  }

  const header = () => (
    <div className='header' onClick={() => toggleExpanded()}>
      {blog.title} (by {blog.author})
    </div>
  )

  const details = () => (
    <div className='details' style={detailStyle}>
      {url()}
      {likes()}
      {userInfo()}
      {removeButton()}
    </div>
  )

  const url = () => {
    if (blog.url) {
      return (
        <div className='url'>
          <a href={blog.url}>{blog.url}</a>
          <br />
        </div>
      )
    }
    return null
  }

  const likes = () => (
    <div className='likes'>
      {blog.likes} likes
      <button
        style={likeButtonStyle}
        onClick={() => onClickLike(blog)}>
        Like
      </button>
    </div>
  )

  const userInfo = () => (
    <div className='user-info'>
      Added by { blog.user ? blog.user.name : 'Anonymous' }
    </div>
  )

  const removeButton = () => (
    <>
    { blog.user.username === user.username &&
      <button
        style={removeButtonStyle}
        onClick={() => onClickRemove(blog)}>
        Remove
      </button>
    }
    </>
  )

  return (
    <li style={itemStyle}>
      {header()}
      {details()}
    </li>
  )
}

export default Blog