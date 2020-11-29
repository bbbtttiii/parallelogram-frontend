import React from 'react';
import Grid from './Grid';
import Login from './Login';
// import GridContent from './GridContent'
import Signup from './Signup';
import Article from './Article';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

// Routes are in Main because it's the highest-level component which shows routed content
// (Header and footer do not change based on routes)
const Main = article => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path='/' component={Grid} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path={`${article.id}`} component={Article} />
        {/* <Route exact path='/tag' component={} /> */}
      </Switch>
    </div>
  )
}

export default Main;