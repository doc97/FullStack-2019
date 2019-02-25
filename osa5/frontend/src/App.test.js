import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import { prettyDOM } from 'dom-testing-library'
import App from './App'

describe('<App />', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders no blogs when not logged in (default)', async () => {
    const component = render(<App />)
    await waitForElement(() => component.container.querySelector('.section-account'))

    const loginForm = component.container.querySelector('form.form-login')
    expect(loginForm).toBeDefined()

    const blogSectionDiv = component.container.querySelector('.section-blogs')
    expect(blogSectionDiv === null)
  })

  it('renders blogs when logged in', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }

    window.localStorage.setItem('loggedInUser', JSON.stringify(user))

    const component = render(<App />)
    await waitForElement(() => component.container.querySelector('.section-blogs'))

    const blogs = component.container.querySelectorAll('li')
    expect(blogs.length).toBe(3)
  })
})