import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const ArticleContent = props => {
  
  //HOOK:
  // initial state
  // useState - hook (like setState but for functional components)
  // setting variable article, and setting a way to change article
  const [article, setArticle] = useState({})
  console.log(article)

  // like componentDidMount - after render, will run everything inside useEffect
  // setArticle 
  // 17: dependencies - will execute whenever those things change
  useEffect(() => {
    setArticle(props.articles.find(a => a.id === props.id).attributes)
  }, [props.articles, props.id])

  // const findArticle = () => {
  //   return props.articles.find(a => a.id === props.id)
  // }

  
  return (
    <div className="Article">
      <div className="article-title">
        {article && article.title}
      </div>
      <div className="article-photo">
        <img src={`${article && article.image_url}`} alt="article" />
      </div>
      <div className="article-details">
        {article && article.author} - {article && article.tag}
      </div>
      <div className="article-content">
        {article && article.content}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(ArticleContent);