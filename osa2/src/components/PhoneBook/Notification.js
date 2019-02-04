import React from 'react'

const Notification = ({message, type}) => {
  if (message === null) {
    return null
  }

  let style = {
    color: 'black',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (type === 'error')
    style = { ...style, color: 'red' }
  else if (type == 'success')
    style = { ...style, color: 'green' }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification