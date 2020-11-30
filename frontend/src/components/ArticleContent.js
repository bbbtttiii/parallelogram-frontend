import React from 'react';
import { connect } from 'react-redux';
import Aside from './Aside.js'
// import { render } from 'react-dom';
// import { NavLink } from 'react-router-dom';


//make functional?
class ArticleContent extends React.Component {

  render() {

    let articleMatch = this.props.articles.find(a => a.id === this.props.id).attributes
    
    const findArticle = () => {
      return articleMatch
    }

    return (
      <div className="Article">
        <div className="article-title">
          {articleMatch && findArticle().title}
        </div>
        <div className="article-details">
          {articleMatch && findArticle().author}
        </div>
        <div className="article-photo">
          <img src={`${articleMatch && findArticle().image_url}`} alt="Parallelogram" />
        </div>
        <div className="article-content">
          {articleMatch && findArticle().content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, { currentUser }) => {
  return {
    articles: state.article.articles,
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(ArticleContent);