import React, { Component } from 'react';
import { connect } from 'react-redux'

//Example of compnent that renders children
class Loading extends Component {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>
    return <div>{this.props.children}</div>
  }
}

const mapStateToProps = (state) => ( { loading: state.loading } )
export default connect(mapStateToProps)(Loading);

