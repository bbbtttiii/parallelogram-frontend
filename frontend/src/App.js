import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import { getArticles, getArticle } from './actions/article.js'
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getArticles()
    // this.props.getArticle()
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStatetoProps, {getCurrentUser, getArticles})(App));