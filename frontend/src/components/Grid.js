import React from 'react';
import { connect } from 'react-redux';
import { showArticles, getArticles } from '../actions/article.js';
import { NavLink } from 'react-router-dom';
import Card from './Card.js';
import article from '../reducers/article.js';
import Test from './Test.js'

const Grid = props => {
  return (
    <>
      <div className="Grid">
        {/* <Test /> */}
        {/* {props.articles.map(article => {
          return (
            <Card key={article.id} />
            )
          })} */}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          
      </div>
    </>
  )
}

// const { articles } = this.props.articles
const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps, { showArticles, getArticles })(Grid);