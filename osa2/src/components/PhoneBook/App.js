import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import NewPersonForm from './NewPersonForm'
import NameFilter from './NameFilter'
import phoneBookService from '../../services/phonebook'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (newName === '' || newNumber === '') {
      alert('Ole hyvä ja anna sekä nimi että puhelinnumero')
      return
    }
    
    // Update existing person information
    const person = persons.find((person) => person.name === newName)
    if (person) {
      if (window.confirm(`'${newName}' on puhelinluettelossa jo, korvataanko vanha numero uudella?`)) {
        const changedPerson = { ...person, number: newNumber }
        const id = changedPerson.id
        phoneBookService
          .update(id, changedPerson)
          .then(returnedPerson => setPersons(persons.map(p => p.id !== id ? p : returnedPerson)))
          .catch(error => {
            alert(`Henkilö '${person.name}' on jo valitettavasti poistettu palvelimelta`)
            setPersons(persons.filter(p => p.id !== id))
          })
      }
      return
    }

    // Add new person
    const personObj = { name: newName, number: newNumber }
    phoneBookService
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const removePersonById = id => {
    phoneBookService
      .remove(id)
      .then(() => {
        const personsCopy = persons.slice()
        const idx = personsCopy.findIndex(p => p.id === id)
        personsCopy.splice(idx, 1)
        setPersons(personsCopy)
      })
      .catch(error => alert('Henkilö on jo poistettu'))
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
      <Persons
        persons={persons.filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase()))}
        removePersonById={removePersonById}
        />
    </div>
  )
}

export default App