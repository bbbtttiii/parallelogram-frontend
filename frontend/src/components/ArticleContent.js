import React from 'react';
import { connect } from 'react-redux';

//make functional?
class ArticleContent extends React.Component {

  render() {

    const findArticle = () => {
      return this.props.articles.find(a => a.id === this.props.id).attributes
    }

    return (
      <div className="Article">
        <div className="article-title">
          {this.props.articles.find(a => a.id === this.props.id) && findArticle().title}
        </div>
        <div className="article-details">
          {this.props.articles.find(a => a.id === this.props.id) && findArticle().author}
        </div>
        <div className="article-photo">
          <img src={`${this.props.articles.find(a => a.id === this.props.id) && findArticle().image_url}`} alt="Parallelogram" />
        </div>
        <div className="article-content">
          {this.props.articles.find(a => a.id === this.props.id) && findArticle().content}
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