import React from 'react'
import Person from './Person'

const Persons = ({persons}) => {
  const elems = () => persons.map(p => <Person key={p.name} person={p} />)
  return (
    <div>
      <h2>Luettelo</h2>
      {elems()}
    </div>
  )
}

export default Persons