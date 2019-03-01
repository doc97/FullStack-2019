import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const vote = (id) => {
    props.store.dispatch(voteAnecdote(id))
  }
  
  const anecdotes = props.store.getState().sort((a, b) => b.votes - a.votes)
  const elems = anecdotes.map(anecdote =>
    <Anecdote
      anecdote={anecdote}
      voteOnClick={() => vote(anecdote.id)} />
  )

  return (
    <ul>
      {elems}
    </ul>
  )
}

export default AnecdoteList