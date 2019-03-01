import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const incGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const incOk = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const incBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={incGood}>hyvä</button>
      <button onClick={incOk}>neutraali</button>
      <button onClick={incBad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
