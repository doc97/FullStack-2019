import React from 'react'

const Notification = ({message, error}) => {
  const baseStyle = {
    color: 'black',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const errorStyle = { ...baseStyle, color: 'red' }
  const messageStyle = { ...baseStyle, color: 'green' }

  return (
    <div>
      { error !== null && <div style={errorStyle}>{error}</div> }
      { message !== null && <div style={messageStyle}>{message}</div> }
    </div>
  )
}

export default Notification