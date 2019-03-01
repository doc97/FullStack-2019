import React from 'react'

const Anecdote = ({ anecdote, voteOnClick }) => (
  <li key={anecdote.id}>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={voteOnClick}>vote</button>
    </div>
  </li>
)

export default Anecdote