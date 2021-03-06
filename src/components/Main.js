import React from 'react'
import Grid from './Grid'
import Login from './Login'
import Signup from './Signup'
import Article from './Article'
import About from './pages/About'
import { Switch, Route } from 'react-router-dom'

// Routes are in Main because it's the highest-level component which shows routed content
// (Header and footer do not change based on routes)
const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path='/' component={Grid} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path={'/articles/:id'} render={(props) => <Article {...props} />} />
        <Route exact path={'/:tag'} render={(props) => <Grid {...props} />} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
}

export default Main