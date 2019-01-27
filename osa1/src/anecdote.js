import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({text, votes}) => (
  <>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </>
)

const AnecdoteOfTheDay = ({anecdote, votes, voteBtn, nextBtn}) => (
  <>
    <h2>Anecdote of the day</h2>
    <Anecdote text={anecdote} votes={votes}/>
    <Button handleClick={voteBtn} text="Vote"/>
    <Button handleClick={nextBtn} text="Next"/>
  </>
)

const AnecdoteWithMostVotes = ({anecdote}) => (
  <>
    <h2>Anecdote with most votes</h2>
    <p>{anecdote}</p>
  </>
)

export const AnecdoteApp = () => {
  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [indexMaxVotes, setIndexMaxVotes] = useState(0);
  const updateIndexMaxVotes = (i) => setIndexMaxVotes(i);

  // Start with a random index
  const [index, setIndex] = useState(randomInt(0, anecdotes.length));
  const nextIndex = () => setIndex(randomInt(0, anecdotes.length));

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const addVote = () => {
    const copy = [...votes];
    copy[index]++;
    setVotes(copy);

    if (copy[index] > copy[indexMaxVotes])
      updateIndexMaxVotes(index);
  };

  return (
    <div>
      <AnecdoteOfTheDay anecdote={anecdotes[index]} votes={votes[index]}
        voteBtn={() => addVote()} nextBtn={() => nextIndex() }/>
      <AnecdoteWithMostVotes anecdote={anecdotes[indexMaxVotes]}/>
    </div>
  )
}
