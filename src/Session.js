import React, { Component } from 'react';
class Speaker extends Component {
  render() {
    return <div>
      <div>{this.props.firstName}</div>
    </div>
  }
}
class Session extends Component {
  render() {
    const { title, abstract } = this.props
    return <div>
      <div>{title}</div>
      <div>{abstract}</div>
      <Speaker { ...this.props.speakers[0] }/>
    </div>
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
}

export default Session
