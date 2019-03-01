import deepFreeze from 'deep-freeze'
import filterReducer, { setFilter } from './filterReducer'

describe('filter reducer', () => {
  const initialState = ''

  test('should return a proper initial state when called with undefined state', () => {
    const action = { type: 'DO_NOTHING' }
    const newState = filterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('should return unchanged state when called with unknown action', () => {
    const action = { type: 'DO_NOTHING' }
    const state = initialState

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toEqual(state)
  })

  test('filter is set', () => {
    const action = setFilter('foobar')
    const state = initialState

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toEqual('foobar')
  })
})
