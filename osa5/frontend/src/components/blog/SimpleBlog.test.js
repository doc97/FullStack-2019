import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
  let component

  const blog = {
    title: 'The meaning of FullStack',
    author: 'John Doe',
    likes: 1
  }

  let mockHandler

  beforeEach(() => {
    mockHandler = jest.fn()
    component = render(
      <SimpleBlog blog={blog} onClick={mockHandler} />
    )
  })

  it('renders its content', () => {
    const headerDiv = component.container.querySelector('.header')
    expect(headerDiv).toHaveTextContent(`${blog.title} ${blog.author}`)

    const likesDiv = component.container.querySelector('.likes')
    expect(likesDiv).toHaveTextContent(`blog has ${blog.likes} likes`)
  })

  it('after clicking the like button, like count is incremented', () => {
    const button = component.getByText('Like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
