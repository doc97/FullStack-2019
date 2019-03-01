import deepFreeze from 'deep-freeze'
import notificationReducer from './notificationReducer'

describe('notification reducer', () => {
  const initialState = 'hello world'


  test('should return a proper initial state when called with undefined state', () => {
    const action = { type: 'DO_NOTHING' }
    const newState = notificationReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('should return unchanged state when called with unknown action', () => {
    const action = { type: 'DO_NOTHING' }
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(undefined, action)
    expect(newState).toEqual(state)
  })
})