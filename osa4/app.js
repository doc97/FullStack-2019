const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const cors = require('cors')
const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log('connected to MongoDB.'))
  .catch((error) => console.log('error connecting to MongoDB: ', error.message))

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app