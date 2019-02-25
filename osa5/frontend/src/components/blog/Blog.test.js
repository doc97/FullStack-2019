import React from 'react'
import { render } from 'react-testing-library'
import { fireEvent } from 'dom-testing-library'
import Blog from './Blog'

describe('<Blog />', () => {
  let component

  const user = {
    username: 'Mocker'
  }

  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'https://duckduckgo.com',
    likes: 1,
    user: {
      username: 'Mocker',
      name: 'Mocker'
    }
  }

  beforeEach(() => {
    component = render(
      <Blog
        user={user}
        blog={blog}
        onClickLike={() => {}}
        onClickRemove={() => {}} />
    )
  })

  it('renders its children', () => {
    const headerDiv = component.container.querySelector('.header')
    expect(headerDiv).toHaveTextContent(`${blog.title} (by ${blog.author})`)

    const urlDiv = component.container.querySelector('.url')
    expect(urlDiv).toHaveTextContent(`${blog.url}`)

    const likesDiv = component.container.querySelector('.likes')
    expect(likesDiv).toHaveTextContent(`${blog.likes} likes`)

    const userInfoDiv = component.container.querySelector('.user-info')
    expect(userInfoDiv).toHaveTextContent(`Added by ${blog.user.name}`)
  })

  it('only header is visible by default', () => {
    const detailsDiv = component.container.querySelector('.details')
    expect(detailsDiv).toHaveStyle('display: none')
  })

  it('after clicking header, details are visible', () => {
    const headerDiv = component.container.querySelector('.header')
    fireEvent.click(headerDiv)

    const detailsDiv = component.container.querySelector('.details')
    expect(detailsDiv).not.toHaveStyle('display: none')
  })

  it('after clicking header twice, details are hidden', () => {
    const headerDiv = component.container.querySelector('.header')
    fireEvent.click(headerDiv)
    fireEvent.click(headerDiv)

    const detailsDiv = component.container.querySelector('.details')
    expect(detailsDiv).toHaveStyle('display: none')
  })
})