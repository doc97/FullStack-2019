import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.content.value)
    event.target.content.value = ''
  }

  return (
    <form onSubmit={create}>
      <input name='content' />
      <button type='submit'>create</button>
    </form>
  )
}

const ConnectedAnecdoteForm = connect(null, { createAnecdote })(AnecdoteForm)
export default ConnectedAnecdoteForm