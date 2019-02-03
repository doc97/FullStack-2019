import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Persons'
import NewPersonForm from './NewPersonForm'
import NameFilter from './NameFilter'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === '' || newNumber === '') {
      alert('Ole hyvä ja anna sekä nimi että puhelinnumero')
      return
    }
    if (persons.some((person) => person.name === newName)) {
      alert(`'${newName}' on puhelinluettelossa jo!`)
      return
    }

    const personObj = { name: newName }
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleNameFilterChange = (event) => setNameFilter(event.target.value)

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <NameFilter value={nameFilter} changeValue={handleNameFilterChange} />
      <NewPersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={persons.filter(
        (p) => p.name.toLowerCase().includes(nameFilter.toLowerCase())
      )} />
    </div>
  )
}

export default App