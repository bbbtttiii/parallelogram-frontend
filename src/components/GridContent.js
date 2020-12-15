import React from 'react'
import { connect } from 'react-redux'
import Card from './Card.js'

const GridContent = props => {

  // console.log("articles loaded in gridcontent component", props.articles)

  const filterArticles = props.match.params.tag
    ? props.articles.filter(a => a.attributes.tag === props.match.params.tag)
    : props.articles

  const articleCards = filterArticles.map(a =>
    <Card
      key={a.id}
      id={a.attributes.id}
      title={a.attributes.title}
      author={a.attributes.author}
      summary={a.attributes.summary}
      tag={a.attributes.tag}
      image_url={a.attributes.image_url}
    />) 
  return articleCards
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  }
}

export default connect(mapStateToProps)(GridContent)