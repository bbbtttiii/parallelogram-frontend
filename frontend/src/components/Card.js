import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import article from '../reducers/article';

const Card = article => {
  return (
    <div className="Card">
      <div className="card-photo">
        <NavLink to ={`${article.id}`}>
          <img src={`${article.image_url}`} alt="article" />
        </NavLink>
      </div>
      <h1 className="card-title">
        <NavLink to='/article'>{article.title}</NavLink>
      </h1>
      <div className="card-details">
        By {article.author}<NavLink to='/tag'>{article.tag}</NavLink>
      </div>
      <div className="card-summary">
        {article.summary}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Card);


// For dynamic Links:

// let articleId = {article.id}
// <NavLink to={`/${articleId}`} className="nav-link">TEXT</NavLink>