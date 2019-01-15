import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Feedback = ({ goodClick, neutralClick, badClick }) => {
  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={goodClick} text="Good" />
      <Button handleClick={neutralClick} text="Neutral" />
      <Button handleClick={badClick} text="Bad" />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given yet.</p>
      </div>
    )
  } else {
    const avg = (good - bad) / total;
    const percentGood = 100 * good / total;

    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Average: {avg}</p>
        <p>Positive: {percentGood}%</p>
      </div>
    )
  }
}

export const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = (func, value) => { func(value + 1); };

  return (
    <div>
      <Feedback
        goodClick={() => incrementValue(setGood, good)}
        neutralClick={() => incrementValue(setNeutral, neutral)}
        badClick={() => incrementValue(setBad, bad)}
      />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
