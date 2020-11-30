import React from 'react';
import { connect } from 'react-redux'
import Logout from './Logout.js';
import { NavLink} from 'react-router-dom';

const Nav = ({ currentUser, loggedIn }) => {
  return (
    <div className="Nav">
      <div className="title">
        <NavLink to='/'>
          <h1>Parallelogram</h1>
        </NavLink>
      </div>
      <div className="left-nav">
        <NavLink activeClassName='selected' to='/nature'>Nature</NavLink>
        <NavLink activeClassName='selected' to='/technology'>Technology</NavLink>
        <NavLink activeClassName='selected' to='/psychology'>Psychology</NavLink>
        <NavLink activeClassName='selected' to='/philosophy'>Philosophy</NavLink>
      </div>
      <div className="right-nav">
        {loggedIn
          ? <> <div className="greeting">Hi, {currentUser.attributes.username}.</div> <Logout /> </>
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