import React, { Component } from 'react';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return <div>
      { sessions.map(s => <Session key={s.Id} {...s} />) }
    </div>
  }
}
export default SessionList