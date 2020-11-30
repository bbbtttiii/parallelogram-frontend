import React from 'react';
import { connect } from 'react-redux';

const ArticleContent = props => {

    const findArticle = () => {
      return props.articles.find(a => a.id === props.id).attributes
    }

    return (
      <div className="Article">
        <div className="article-title">
          {props.articles.find(a => a.id === props.id) && findArticle().title}
        </div>
        <div className="article-details">
          {props.articles.find(a => a.id === props.id) && findArticle().author}
        </div>
        <div className="article-photo">
          <img src={`${props.articles.find(a => a.id === props.id) && findArticle().image_url}`} alt="Parallelogram" />
        </div>
        <div className="article-content">
          {props.articles.find(a => a.id === props.id) && findArticle().content}
        </div>
      </div>
    )
  
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
  }
}

export default connect(mapStateToProps)(ArticleContent);