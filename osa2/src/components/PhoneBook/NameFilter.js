import React from 'react'

const NameFilter = ({value, changeValue}) => (
  <div>
    Rajaa: <input value={value} onChange={changeValue} />
  </div>
)

export default NameFilter