import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

const Nav = ({ currentUser }) => {
  return (
    <div className="Nav">
      {currentUser ? <strong>Hi {currentUser.attributes.username}</strong> : ""}
      <button>Log In</button> or <button>Sign Up</button>
      {/* {currentUser ? <Logout /> : <Login />} */}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav);