import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { compile } from 'handlebars';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Trump';
    this.setState({persons: [
      {name: newName, age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Stephanie', age: 27}
    ]})
  }

  changeNameHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28 },
      {name: event.target.value, age: 29 },
      {name: 'Stephanie', age: 26}
    ]})
  }

  tooglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click ={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.changeNameHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.tooglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') )
}

export default App;
