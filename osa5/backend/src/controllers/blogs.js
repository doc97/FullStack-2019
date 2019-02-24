const blogsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

const verifyToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET)
  return token && decodedToken.id
}

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({}).populate('user', { username: 1, name: 1 })
 
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response, next) => {
  try{
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch(exception) {
    next(exception)
  }
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id)
      return response.status(401).json({ error: 'invalid token' })

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url === undefined ? '' : body.url,
      likes: body.likes === undefined ? 0 : body.likes,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch(exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    if (!verifyToken(request.token))
      return response.status(401).json({ error: 'invalid token' })

    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const filter = {
    _id: request.params.id
  }

  const updatedBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: body.user,
  }

  const options = {
    new: true
  }

  try {
    if (!verifyToken(request.token)) {
      return response.status(401).json({ error: 'invalid token' })
    }

    const result = await Blog
      .findOneAndUpdate(filter, updatedBlog, options)
      .populate('user', { username: 1, name: 1})
    response.json(result.toJSON())
  } catch (exception) {
    console.log(exception)
    next(exception)
  }
})

module.exports = blogsRouter