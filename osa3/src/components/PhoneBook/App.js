import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import NewPersonForm from './NewPersonForm'
import NameFilter from './NameFilter'
import Notification from './Notification'
import phoneBookService from '../../services/phonebook'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const pushMessage = (msg, timeoutMs=3000) => {
    setMessage(msg)
    setTimeout(() => setMessage(null), timeoutMs)
  }

  const pushError = (err, timeoutMs=3000) => {
    setError(err)
    setTimeout(() => setError(null), timeoutMs)
  }

  const addPerson = (event) => {
    event.preventDefault()

    // Update existing person information
    const person = persons.find((person) => person.name === newName)
    if (person) {
      if (window.confirm(`'${newName}' on puhelinluettelossa jo, korvataanko vanha numero uudella?`)) {
        const changedPerson = { ...person, number: newNumber }
        const id = changedPerson.id
        phoneBookService
          .update(id, changedPerson)
          .then(returnedPerson => {
            pushMessage(`Numero vaihdettu henkilöllä ${returnedPerson.name}`)
            setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
          })
          .catch(error => {
            pushError(`Henkilö '${person.name}' on jo valitettavasti poistettu palvelimelta`)
            setPersons(persons.filter(p => p.id !== id))
          })
          .then(_ => {
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    // Add new person
    const personObj = { name: newName, number: newNumber }
    phoneBookService
      .create(personObj)
      .then(returnedPerson => {
        pushMessage(`Lisätty ${returnedPerson.name}`)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => pushError(error.response.data.error))
  }

  const removePersonById = id => {
    phoneBookService
      .remove(id)
      .then(() => {
        const personsCopy = persons.slice()
        const person = personsCopy.find(p => p.id === id)
        const idx = personsCopy.indexOf(person)
        personsCopy.splice(idx, 1)
        setPersons(personsCopy)
        pushMessage(`Poistettu ${person.name}`)
      })
      .catch(error => pushError('Henkilö on jo poistettu'))
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleNameFilterChange = (event) => setNameFilter(event.target.value)

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification message={error} type='error' />
      <Notification message={message} type='success' />
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