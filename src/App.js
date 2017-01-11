import React, { Component } from 'react';
import logo from '../public/codemash.png';
import './App.css';
import Session from './Session'

const session = {
  title: "React Everywhere",
  abstract: "React - look out!",
  speakers: [
    { firstName: "Len" }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-2" alt="logo" />
          <img src={logo} className="App-logo-3" alt="logo" />
          <h2>Welcome to Codemash</h2>
        </div>
        <Session {...session}/>
      </div>
    );
  }
}

export default App;
