import React from 'react';
import { connect } from 'react-redux';
import { showArticles, getArticles } from '../actions/article.js';
import { NavLink } from 'react-router-dom';
import Card from './Card.js';
import article from '../reducers/article.js';

const Grid = ({ title, author, content, summary, tag, showArticles, article, articles }) => {
  return (
    <>
      <div className="Grid">
      {/* <p>{article.title}</p> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  // const { title, author, summary, content, tag } = state.article
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps, { showArticles, getArticles })(Grid);