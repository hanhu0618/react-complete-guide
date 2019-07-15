import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'dfwqe3', name: 'Max', age: 28 },
      {id: 'sv34', name: 'Manu', age: 29 },
      {id: '3fs', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = {
    //   ...this.state.persons[personIndex]
    // }

    // const person = Object.assign({}, this.state.persons[personIndex]);
    // person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex].name = event.target.value;

    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.changeNameHandler(event, person.id)}
              name={person.name} 
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
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
