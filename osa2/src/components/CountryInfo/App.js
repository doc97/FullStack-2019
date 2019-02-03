import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './Result'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    const urlEnd = filter ? `name/${filter}` : 'all'
    axios.get(`https://restcountries.eu/rest/v2/${urlEnd}`)
    .then(response => setCountries(response.data))
    .catch(error => setCountries([]))
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <div>
        find <input value={filter} onChange={handleFilterChange} />
      </div>
      <Result countries={countries} setFilter={setFilter} />
    </div>
  )
}

export default App