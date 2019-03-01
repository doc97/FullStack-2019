import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    props.store.dispatch(createAnecdote(event.target.content.value))
    event.target.content.value = ''
  }

  return (
    <form onSubmit={create}>
      <input name='content' />
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm