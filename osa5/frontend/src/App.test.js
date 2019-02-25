import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import App from './App'

describe('<App />', () => {
  it('renders no blogs when not logged in (default)', async () => {
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(() => component.container.querySelector('.section-account'))

    const loginForm = component.container.querySelector('form.form-login')
    expect(loginForm).toBeDefined()

    const blogSectionDiv = component.container.querySelector('.section-blog')
    expect(blogSectionDiv === null)
  })
})