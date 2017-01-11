import React, { Component } from 'react';
import { connect } from 'react-redux'
import Session from './Session'

const URL = './session.json'
class SessionList extends Component {
  constructor(props) {
    super(props);
    const { fetchedSessions } = this.props; //object destructuring //const fetchedSessions = this.props.fetchedSessions;

    //wha???
    fetch(URL).then(r => r.json()).then((sessions) => fetchedSessions(sessions))
  }
  render() {
    const { sessions } = this.props
    return <div>
      { sessions.map(s => <Session key={s.Id} {...s} />) }
    </div>
  }
}

const mapStateToProps = (state) => ( { sessions: state.sessions } )
const mapDispatchToProps = (dispatch) => {
  return {
    fetchedSessions: (sessions) => dispatch({type: 'FETCHED_SESSIONS', sessions: sessions})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList)
