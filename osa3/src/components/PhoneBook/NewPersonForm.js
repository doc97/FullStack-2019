import React from 'react'

const NewPersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <>
  <h2>Lisää uusi</h2>
  <form onSubmit={addPerson}>
    <div>
      nimi: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      numero: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
  </>
)

export default NewPersonForm