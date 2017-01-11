import React, { Component } from 'react';
class Speaker extends Component {
  render() {
    return <div>
      <div>{this.props.FirstName} {this.props.LastName}</div>
    </div>
  }
}
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
  abstractLink() {
    return <a href="#" onClick={this.toggleState}>{ this.state.showDetails ? "X" : "show abstract"}</a>
  }
  render() {
    const { Title, Abstract } = this.props
    return <div className="session">
      <div>{Title}</div>
      <Speaker { ...this.props.Speakers[0] }/>
      { this.state.showDetails && <div className="abstract">{Abstract}</div> }
      { this.abstractLink() }
    </div>
  }
}

Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired,
  Speakers: React.PropTypes.array.isRequired,
}

export default Session
