import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const { filter, anecdotes, notification } = props.store.getState()

  const vote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    props.store.dispatch(voteAnecdote(id))
    props.store.dispatch(setNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      if (notification === `You voted '${anecdote.content}'`) {
        props.store.dispatch(unsetNotification())
      }
    }, 5000)
  }

  const anecdotesToShow = () => {
    const filtered = anecdotes.filter(anecdote => {
      return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })
    const sorted = filtered.sort((a, b) => b.votes - a.votes)
    return sorted
  }
  
  const elems = anecdotesToShow().map(anecdote =>
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