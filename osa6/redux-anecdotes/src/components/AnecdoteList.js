import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (id) => {
    const anecdote = props.anecdotes.find(a => a.id === id)
    props.voteAnecdote(id)
    props.setNotification(`You voted '${anecdote.content}'`)
    setTimeout(() => {
      if (props.notification === `You voted '${anecdote.content}'`) {
        props.unsetNotification()
      }
    }, 5000)
  }

  const elems = props.anecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  const filtered = anecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().includes(filter.toLowerCase())
  })
  const sorted = filtered.sort((a, b) => b.votes - a.votes)
  return sorted
}

const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state),
    notification: state.notification
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  unsetNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList