import React from 'react';
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'

const App = (props) => {
  const store = props.store
  const anecdotes = store.getState()
  
  const vote = (id) => {
    store.dispatch(voteAnecdote(id))
  }

  const create = (event) => {
    event.preventDefault()
    store.dispatch(createAnecdote(event.target.content.value))
    event.target.content.value = ''
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <input name='content' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
