import React from 'react';
import ReactDOM from 'react-dom';
import { AnecdoteApp } from './anecdote.js'

const App = () => ( <AnecdoteApp/> );
ReactDOM.render(<App />, document.getElementById('root'));