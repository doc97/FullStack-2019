import deepFreeze from 'deep-freeze'
import anecdoteReducer, { voteAnecdote, createAnecdote } from './anecdoteReducer'

describe('anecdote reducer', () => {
  const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const asObject = (anecdote, index) => {
    return {
      content: anecdote,
      id: index,
      votes: 0
    }
  }

  const initialState = anecdotesAtStart.map(asObject)

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = anecdoteReducer(undefined, action)
    expect(newState).toEqual([])
  })

  test('should return unchanged state when called with unknown action', () => {
    const action = {
      type: 'DO_NOTHING'
    }
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(state)
  })

  test('votes are incremented', () => {
    const toChangeId = 0
    const action = voteAnecdote(toChangeId)
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(state.map(a => {
      return a.id !== toChangeId
        ? a
        : { content: a.content, id: a.id, votes: a.votes + 1 }
    }))
  })

  test('new anecdote is added', () => {
    const action = createAnecdote('Test content')
    const state = initialState
    const newAnecdote = action.data

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(state.concat(newAnecdote))
  })
})