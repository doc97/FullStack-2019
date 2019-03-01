const initialState = { notification: '' }

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      if (state.timeoutId !== undefined) {
        clearTimeout(state.timeoutId)
      }
      return action.data
    case 'UNSET_NOTIFICATION':
      if (state.timeoutId !== undefined) {
        clearTimeout(state.timeoutId)
      }
      return { notification: '' }
    default:
      return state
  }
}

export const setNotification = (notification, timeoutId) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      notification,
      timeoutId
    }
  }
}

export const unsetNotification = () => {
  return {
    type: 'UNSET_NOTIFICATION'
  }
}

export default notificationReducer