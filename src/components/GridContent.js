import React from 'react'
import { connect } from 'react-redux'
import Card from './Card.js'

const GridContent = props => {

  const filterArticles = props.match.params.tag
    ? props.articles.filter(a => a.attributes.tag === props.match.params.tag)
    : props.articles

  const articleCards = filterArticles.map(a =>
    <Card
      className={"Card"}
      key={a.id}
      id={a.attributes.id}
      title={a.attributes.title}
      author={a.attributes.author}
      summary={a.attributes.summary}
      tag={a.attributes.tag}
      image_url={a.attributes.image_url}
    />)

    if (filterArticles.length === 0) {
      return "No articles with this tag."
    } else {
      return articleCards

    }

}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  }
}

export default connect(mapStateToProps)(GridContent)