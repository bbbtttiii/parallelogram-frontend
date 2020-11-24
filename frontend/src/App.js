import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import Nav from './components/Nav.js'
import Main from './components/Main.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);