import React, { Component } from 'react';
import { connect } from 'react-redux'
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    return <div>
      { sessions.map(s => <Session key={s.Id} {...s} />) }
    </div>
  }
}

const mapStateToProps = (state) => ( { sessions: state.sessions } )

export default connect(mapStateToProps)(SessionList)
