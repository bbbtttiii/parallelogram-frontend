import React from 'react';
import { connect } from 'react-redux';
import article from '../reducers/article';

const Article = article => {
  return (
    <div className="Article">
      <div className="article-title">
        {article.title}
      </div>
      <div className="article-photo">
        <img src={`${article.image_url}`} alt="article" />
      </div>
      <div className="article-details">
        {article.author} - {article.tag}
      </div>
      <div className="article-content">
        {article.content}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Article);