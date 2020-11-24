import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';

const Nav = ({ currentUser }) => {
  return (
    <div className="Nav">
      <span className="left-nav">
        <h1 class="title">Parallelogram</h1>
        Link - Link - Link - Link
      </span>
      <span className="right-nav">
        {/* if logged out, show login/signup buttons*/}
        {/* {if logged in, show favorites/logout buttons} */}
        {currentUser ? <> <Pinned/> <Logout /> </> : <> <Login /> <Signup /> </> }
        {/* <Route exact path='/' render{() => loggedIn ? <LOGGEDINCOMPONENTS/> : <NOTLOGGEDINCOMPONENTS/>} /> */}
      </span>
      {/* {currentUser ? <strong>Hi {currentUser.attributes.username}</strong> : ""} */}
      <button>Log In</button> or <button>Sign Up</button>
      {/* {currentUser ? <Logout /> : <Login />} */}
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