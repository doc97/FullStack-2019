import React from 'react'

const CountryResult = ({name, setFilter}) => (
  <div>
    {name} <input type='button' value='show' onClick={() => setFilter(name)}/>
  </div>
)

export default CountryResult