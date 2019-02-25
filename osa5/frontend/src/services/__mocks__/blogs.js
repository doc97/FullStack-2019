let token = null

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

const setToken = newToken => token = `Bearer ${newToken}`
const getAll = () => Promise.resolve(blogs)

export default { setToken, getAll }
