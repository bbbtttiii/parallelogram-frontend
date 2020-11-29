import React from 'react';
import ArticleContent from './ArticleContent.js'

const Article = (props) => {
  return (
    <div className="Article">
      <ArticleContent id={props.match.params.id}/>
    </div>
  )
}

export default Article;