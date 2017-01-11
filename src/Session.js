import React, { Component } from 'react';

const Speaker = (props) => <div>{props.FirstName} {props.LastName}</div>

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState(e) {
    e.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  abstractOpen(abstract) {
    return <div className="abstract">
      <a href="#" onClick={this.toggleState}>X</a>
      <p>{abstract}</p>
    </div>
  }

  abstractClosed(abstract) {
    return <a href="#" onClick={this.toggleState}>show abstract</a>
  }

  render() {
    const { Title, Abstract } = this.props
    return <div className="session">
      <div>{Title}</div>
      <Speaker { ...this.props.Speakers[0] }/>
      { this.state.showDetails ? this.abstractOpen(Abstract) : this.abstractClosed(Abstract) }
    </div>
  }
}

Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired,
  Speakers: React.PropTypes.array.isRequired,
}

export default Session
