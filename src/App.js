import React, { Component } from 'react';

import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Costas', age: 30 }, { name: 'Eleni', age: 29 }]
  };
  render() {
    return (
      <div>
        <h1>Hi I am a React component</h1>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
        >
          My Hobbies: Racing
        </Person>
        <Person age={33} name={'Eleni'} />
      </div>
    );
  }
}

export default App;
