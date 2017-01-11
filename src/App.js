import React, { Component } from 'react';
import logo from '../public/codemash.png';
import './App.css';
import SessionList from './SessionList'


//Example of compnent that renders children
//TODO - fix x problem by passing abstract through the link function?
class Loading extends Component {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>
    return <div>{this.props.children}</div>
  }
}

const URL = './session.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      sessions: []
    }
    fetch(URL).then(r => r.json()).then((sessions) => this.setState({loading: false, sessions: sessions}))
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
        <Loading loading={this.state.loading}>
          <SessionList sessions={this.state.sessions} />
      </Loading>
      </div>
    );
  }
}

export default App;
