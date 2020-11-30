import React from 'react';
import ArticleContent from './ArticleContent.js'
import { connect } from 'react-redux'
import Aside from './Aside.js'

const Article = props => {
  return (
    <>
      <div className="Aside">
        <Aside />
      </div>
      <div className="Article">
        <ArticleContent id={props.match.params.id}/>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
  }
}

export default connect(mapStateToProps)(Article);