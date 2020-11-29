import React from 'react';
import Grid from './Grid';
import Login from './Login';
// import GridContent from './GridContent'
import Signup from './Signup';
import Article from './Article';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

const Main = article => {
  return (
    <div className="Main">
      <Switch>
          <Route exact path='/' component={Grid} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path={`${article.id}`} component={Article} />
          {/* <Route exact path='/tag' component={} /> */}
          <div className="footer">Parallelogram 2020</div>
        </Switch>
    </div>
  )
}

export default Main;