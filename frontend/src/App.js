import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import Nav from './components/Nav.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Nav />
    );
  }
}

export default connect(null, {getCurrentUser})(App);