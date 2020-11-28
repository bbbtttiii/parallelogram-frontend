import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import article from '../reducers/article';

const Card = article => {
  return (
    <div className="Card">
      <h1 className="card-title"><NavLink to='/article'>{article.title}</NavLink></h1>
      <div className="card-photo"><NavLink to ='/article'>Photo</NavLink></div>
      <div className="card-details">{article.author}<NavLink to='/tag'>{article.tag}</NavLink></div>
      <div className="card-summary">{article.content}</div>
    </div>
  )
}

const mapStateToProps = state => {
  // const { title, author, summary, content, tag } = state.article
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Card);


// For dynamic Links:

// let articleId = {article.id}
// <NavLink to={`/${articleId}`} className="nav-link">TEXT</NavLink>


