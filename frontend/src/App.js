import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Main />

          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default connect(null, {getCurrentUser})(App);