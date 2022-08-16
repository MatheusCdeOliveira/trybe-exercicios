import './App.css';
import React from 'react';

const compromissos = [
  'Acordar cedo',
  'Estudar',
  'Melhorar o inglês',
  'Fazer exercício',
];
const Task = (value) => {
  return <li>{value}</li>;
};

class App extends React.Component {
  render() {
    return <ul> {compromissos.map((element) => Task(element))}</ul>;
  }
}

export default App;
