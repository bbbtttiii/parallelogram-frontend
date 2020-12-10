import React from 'react'
import { connect } from 'react-redux'

const ArticleContent = props => {

    const finder = props.articles.find(a => a.id === props.id)

    const returnArticle = () => {
      return finder.attributes
    }

    return (
      <div className="Article">
        <div className="article-title">
          {finder && returnArticle().title}
        </div>
        <div className="article-details">
          {finder && returnArticle().author}
        </div>
        <div className="article-photo">
          <img src={`${finder && returnArticle().image_url}`} alt="Parallelogram" />
        </div>
        <div className="article-content">
          {finder && returnArticle().content}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
  }
}

export default connect(mapStateToProps)(ArticleContent)