import React from 'react'
import Weather from './Weather'

const CountryInfo = ({country}) => {
  const languages = () => country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {languages()}
      </ul>
      <img src={country.flag} alt='flag' width='100px' height='100px' />
      <Weather city={country.capital} />
    </div>
  )
}

export default CountryInfo