import { useState } from 'react'

export const useField = (name, type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => { setValue(event.target.value) }
  const reset = () => { setValue('') }

  return { type, value, name, onChange, reset }
}

export const useResource = (baseUrl) => {
  const blogs = [
    {
      id: '5a451df7571c224a31b5c8ce',
      title: 'Test blog 1',
      author: 'Author 1',
      url: 'www.example.com',
      user: {
        _id: '5a437a9e514ab7f168ddf138',
        username: 'doc97',
        name: 'Daniel Riissanen'
      }
    },
    {
      id: '5a451e21e0b8b04a45638211',
      title: 'Test blog 2',
      author: 'Author 2',
      url: 'www.example.com',
      user: {
        _id: '5a437a9e514ab7f168ddf138',
        username: 'doc97',
        name: 'Daniel Riissanen'
      }
    },
    {
      id: '5a451e30b5ffd44a58fa79ab',
      title: 'Test blog 3',
      author: 'Author 3',
      url: 'www.example.com',
      user: {
        _id: '5a437a9e514ab7f168ddf138',
        username: 'doc97',
        name: 'Daniel Riissanen'
      }
    },
  ]

  const service = {
    setTokenHeader: (newToken) => {},
    getAll: () => Promise.resolve(blogs)
  }

  return [
    blogs,
    service
  ]
}