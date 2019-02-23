import React from 'react'

const BlogForm = ({
  onSubmit,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url}) => (
    <form onSubmit={onSubmit}>
      <div>
        Title:
        <input
          value={title}
          name='Title'
          onChange={handleTitleChange}
        />
      </div>
      <div>
        Author:
        <input
          value={author}
          name='Author'
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        URL:
        <input
          value={url}
          name='URL'
          onChange={handleUrlChange}
        />
      </div>
      <button type='submit'>Save</button>
    </form>
)

export default BlogForm