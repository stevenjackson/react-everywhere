import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import logo from '../public/codemash.png';
import './App.css';
import store from './store/index'
import SessionList from './SessionList'


//Example of compnent that renders children
//TODO - fix x problem by passing abstract through the link function?
class _Loading extends Component {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>
    return <div>{this.props.children}</div>
  }
}

const mapStateToProps = (state) => { return { loading: state.loading } }
const Loading = connect(mapStateToProps)(_Loading);

const URL = './session.json'

class App extends Component {
  constructor(props) {
    super(props)
    //fetch(URL).then(r => r.json()).then((sessions) => this.setState({loading: false, sessions: sessions}))
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo-2" alt="logo" />
            <img src={logo} className="App-logo-3" alt="logo" />
            <h2>Welcome to Codemash</h2>
          </div>
          <Loading>
            <SessionList />
          </Loading>
        </div>
      </Provider>
    );
  }
}

export default App;
