import React from 'react'
import CountryInfo from './CountryInfo'
import CountryResult from './CountryResult'

const Result = ({countries, setFilter}) => {
  const MAX_RESULTS = 10

  let output = () => <p>Too many matches, specify another filter.</p>

  if (countries.length === 0) {
    output = () => <p>No country found with the current filter, try another one.</p>
  } else if (countries.length === 1) {
    output = () => <CountryInfo country={countries[0]} />
  } else if (countries.length <= MAX_RESULTS) {
    output = () => countries.map(country =>
      <CountryResult
        key={country.name}
        name={country.name}
        setFilter={setFilter} />
    )
  }

  return (
    <div>
      {output()}
    </div>
  )
}

export default Result