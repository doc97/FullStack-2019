import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    props.createAnecdote(content)
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