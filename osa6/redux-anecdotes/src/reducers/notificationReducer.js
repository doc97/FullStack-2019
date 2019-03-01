const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'UNSET_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const setNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const unsetNotification = () => {
  return {
    type: 'UNSET_NOTIFICATION'
  }
}

export default notificationReducer