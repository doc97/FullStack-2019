const initialState = 'hello world'

const notificationReducer = (state = initialState, action) => {
  return state
}

export const notificationChange = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export default notificationReducer