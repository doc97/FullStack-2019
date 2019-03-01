import deepFreeze from 'deep-freeze'
import notificationReducer, { setNotification, unsetNotification } from './notificationReducer'

describe('notification reducer', () => {
  const initialState = ''

  test('should return a proper initial state when called with undefined state', () => {
    const action = { type: 'DO_NOTHING' }
    const newState = notificationReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('should return unchanged state when called with unknown action', () => {
    const action = { type: 'DO_NOTHING' }
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual(state)
  })

  test('notification is set', () => {
    const action = setNotification('foobar')
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual('foobar')
  })

  test('notification is unset', () => {
    const action = unsetNotification()
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual(initialState)
  })
})