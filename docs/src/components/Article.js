import React from 'react';
import ArticleContent from './ArticleContent.js'
import Sidebar from './Sidebar.js'

const Article = props => {
  return (
    <>
      <Sidebar articleId={props.match.params.id}/>
      <ArticleContent id={props.match.params.id}/>
    </>
  )
}

export default Article;