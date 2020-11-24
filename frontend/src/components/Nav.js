import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';
import { Route, Link, NavLink, Switch} from 'react-router-dom';

const Nav = ({ currentUser, loggedIn }) => {
  return (
    <div className="Nav">
        <span className="left-nav">
        <NavLink to='/'>
          <h1 className="title">Parallelogram</h1>
        </NavLink>
          Link - Link - Link - Link
        </span>
        <span className="right-nav">
          {/* if logged out, show login/signup buttons*/}
          {/* {if logged in,   show favorites/logout buttons} */}
          {/* {loggedIn ? <> <Logout /> </> : <> <Login /> <Signup /> </> } */}
          {/* <Route exact path='/' render{() => loggedIn ? <LOGGEDINCOMPONENTS/> : <NOTLOGGEDINCOMPONENTS/>} /> */}
          
          {/* {currentUser ? <strong>Hi {currentUser.attributes.username}</strong> : ""} */}
          <Link to='/login'>Log In</Link> or <Link to ='/signup'>Sign Up</Link>
          {/* {currentUser ? <Logout /> : <Login />} */}
        </span>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Nav);

