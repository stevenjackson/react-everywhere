import React, { Component } from 'react';
import { connect } from 'react-redux'
import Session from './Session'

const URL = './session.json'

const Toggle = (props)  => {
  const { toggled, onToggle, text } = props
  return <div className={toggled ? 'toggled' : ''}>
    <a href="#" onClick={onToggle}>{text}</a>
  </div>
}

class SessionList extends Component {
  constructor(props) {
    super(props);
    const { fetchedSessions } = this.props; //object destructuring //const fetchedSessions = this.props.fetchedSessions;

    //wha???
    fetch(URL).then(r => r.json()).then((sessions) => fetchedSessions(sessions))
  }
  filterSessions(sessionName) {
    console.log(sessionName);
  }
  render() {
    const { sessions } = this.props
    const filter = (sessionName) => this.filterSessions.bind(this, sessionName)
    return <div>
      <div className="toggles">
        <Toggle text="Pre-Compiler" onToggle={filter("Pre-Compiler")}/>
        <Toggle text="KidzMash" onToggle={filter("Kidz Mash")}/>
      </div>
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
