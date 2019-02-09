import React from 'react'

const Person = ({person, onClick}) => {
  return (
    <div>
      {person.name}: {person.number} <input type='button' value='poista' onClick={onClick} />
    </div>
  )
}

export default Person