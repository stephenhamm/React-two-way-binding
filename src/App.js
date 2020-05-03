import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      name: 'Steve'
  }

nameChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className="App">           
        <UserOutput name={this.state.name} />
        <UserInput changed={this.nameChangeHandler} newName={this.state.name}/>
      </div>
    );
  }
}

export default App;
