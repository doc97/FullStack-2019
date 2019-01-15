import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => (
  <>
    <p>{props.name} {props.exercise}</p>
  </>
)

const Content = (props) => (
  <div>
    <Part name={props.names[0]} exercise={props.exercises[0]} />
    <Part name={props.names[1]} exercise={props.exercises[1]} />
    <Part name={props.names[2]} exercise={props.exercises[2]} />
  </div>
)

const Total = (props) => {
  let exerciseSum = 0;
  for (let e of props.exercises) {
    exerciseSum += e;
  }
  return (
    <div>
      <p>yhteensä {exerciseSum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys';
  const exercises = [ 10, 7, 14 ];
  const names = [
    'Reactin perusteet',
    'Tiedonvälitys propseilla',
    'Komponenttien tila'
  ];

  return (
    <div>
      <Header course={course} />
      <Content names={names} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));