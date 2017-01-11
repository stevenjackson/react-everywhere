import React, { Component } from 'react';
import logo from '../public/codemash.png';
import './App.css';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return <div>
      { sessions.map(s => <Session key={s.Id} {...s} />) }
    </div>
  }
}

const URL = './session.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessions: []
    }
    fetch(URL).then(r => r.json()).then((sessions) => this.setState({sessions: sessions}))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-2" alt="logo" />
          <img src={logo} className="App-logo-3" alt="logo" />
          <h2>Welcome to Codemash</h2>
        </div>
        <SessionList sessions={this.state.sessions} />
      </div>
    );
  }
}

export default App;
