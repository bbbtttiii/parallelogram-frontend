import React from 'react';
import ArticleContent from './ArticleContent.js'
import { connect } from 'react-redux'
import Sidebar from './Sidebar.js'

const Article = props => {
  return (
    <>
        <Sidebar articleId={props.match.params.id}/>
        <ArticleContent id={props.match.params.id}/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
  }
}

export default connect(mapStateToProps)(Article);