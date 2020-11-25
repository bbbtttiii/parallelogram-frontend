import React from 'react';
import Grid from './Grid';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

const Main = () => {
  return (
    <div className="Main">
        <Route exact path='/' component={Grid} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <div className="footer">footer</div>
    </div>
  )
}

export default Main;