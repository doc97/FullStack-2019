import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (id) => {
    const anecdote = props.store.getState().anecdotes.find(a => a.id === id)
    props.store.dispatch(voteAnecdote(id))
    props.store.dispatch(setNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      if (props.store.getState().notification === `You voted '${anecdote.content}'`) {
        props.store.dispatch(unsetNotification())
      }
    }, 5000)
  }
  
  const anecdotes = props.store.getState().anecdotes.sort((a, b) => b.votes - a.votes)
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