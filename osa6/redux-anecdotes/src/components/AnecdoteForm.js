import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    const newAnecdote = await anecdoteService.create(content)
    props.createAnecdote(newAnecdote)
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