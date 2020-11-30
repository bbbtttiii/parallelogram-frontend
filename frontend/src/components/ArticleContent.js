import React from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ArticleContent extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

  const findArticle = () => {
    return this.props.articles.find(a => a.id === this.props.id).attributes
  }

    return (
      <div className="Article">
        <div className="article-title">
          {findArticle().title}
        </div>
        <div className="article-details">
          {findArticle().author}
        </div>
        <div className="article-photo">
          <img src={`${findArticle().image_url}`} alt="Parallelogram" />
        </div>
        <div className="article-content">
          {findArticle().content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(ArticleContent);