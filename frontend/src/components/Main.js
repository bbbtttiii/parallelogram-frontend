import React from 'react';
import Grid from './Grid';
import Login from './Login';
import Test from './Test'
import Signup from './Signup';
import Article from './Article';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

const Main = () => {
  return (
    <div className="Main">
        <Test />
        <Route exact path='/' component={Grid} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/article' component={Article} />
        {/* <Route exact path='/tag' component={} /> */}
        <div className="footer">footer</div>
    </div>
  )
}

export default Main;