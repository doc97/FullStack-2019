import deepFreeze from 'deep-freeze'
import notificationReducer, { setNotification, unsetNotification } from './notificationReducer'

describe('notification reducer', () => {
  const initialState = { notification: '' }

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
    const action = setNotification('foobar', 1337)
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual({ notification: 'foobar', timeoutId: 1337 })
  })

  test('notification is unset', () => {
    const action = unsetNotification()
    const state = initialState

    deepFreeze(state)
    const newState = notificationReducer(state, action)
    expect(newState).toEqual(initialState)
  })

  test('timeoutId is set', () => {
    const action = setNotification('hello world', 42)
    const state = { notification: 'foobar', timeoutId: 1337 }

    deepFreeze
    const newState = notificationReducer(state, action)
    expect(newState).toEqual({ notification: 'hello world', timeoutId: 42 })
  })
})