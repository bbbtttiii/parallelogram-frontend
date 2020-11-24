import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Logout from './components/Logout.js';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
        <div>
            <Nav />
            <Main />
            
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {/* <Route path='/' component={} /> */}
        </div>
    );
  }
}

const mapStatetoProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStatetoProps, {getCurrentUser})(App));