const blogs = [
  {
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

const getAll = () => Promise.resolve(blogs)

export default { getAll }
