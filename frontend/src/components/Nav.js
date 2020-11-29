import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';
import { Route, Link, NavLink, Switch} from 'react-router-dom';

const Nav = ({ currentUser, loggedIn }) => {
  return (
    <div className="Nav">
        <div className="title">
          <NavLink to='/'>
            <h1>Parallelogram</h1>
          </NavLink>
        </div>
        <div className="left-nav">
          <NavLink to='/nature'>Nature</NavLink>
          <NavLink to='/technology'>Technology</NavLink>
          <NavLink to='/psychology'>Psychology</NavLink>
          <NavLink to='/philosophy'>Philosophy</NavLink>
        </div>
        <div className="right-nav">
          {loggedIn
            ? <> <strong>Hi, {currentUser.attributes.username}.</strong> <NavLink to='/favorites'>Favorites</NavLink> <Logout /> </>
            : <> <NavLink to='/login'>Log In</NavLink><NavLink to ='/signup'>Sign Up</NavLink> </>
          }
        </div>
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