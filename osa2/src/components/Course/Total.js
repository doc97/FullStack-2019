import React from 'react'

const Total = ({parts}) => {
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <div>
      <p>yhteensä {total} tehtävää</p>
    </div>
  )
}

export default Total;