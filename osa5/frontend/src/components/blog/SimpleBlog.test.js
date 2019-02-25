import React from 'react'
import { render } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

test('renders content', () => {
  const blog = {
    title: 'The meaning of FullStack',
    author: 'John Doe',
    likes: 1
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  const headerDiv = component.container.querySelector('.header')
  expect(headerDiv).toHaveTextContent(`${blog.title} ${blog.author}`)

  const likesDiv = component.container.querySelector('.likes')
  expect(likesDiv).toHaveTextContent(`blog has ${blog.likes} likes`)
})
