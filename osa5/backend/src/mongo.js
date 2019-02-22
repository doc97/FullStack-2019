const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb://fullstack:${password}@ds163054.mlab.com:63054/fullstack2019-notes-test`

mongoose.connect(url, { useNewUrlParser: true })

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean,
})

const note = new Note({
  content: 'supertest sopii API:n testaamiseen',
  date: new Date(),
  important: false,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})