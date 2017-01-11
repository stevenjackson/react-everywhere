import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from '../public/codemash.png';
import './App.css';
import store from './store/index'
import SessionList from './SessionList'
import Loading from './Loading'

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
