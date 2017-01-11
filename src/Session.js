import React, { Component } from 'react';
class Session extends Component {
  render() {
    const { title, abstract } = this.props
    return (<div>
        <div>{title}</div>
        <div>{abstract}</div>
      </div>
    )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
}

export default Session
