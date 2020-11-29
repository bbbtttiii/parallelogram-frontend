import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card.js';

const GridContent = props => {
  // debugger
  console.log("articles loaded in gridcontent", props.articles)
  const articleCards = props.articles.map(a =>
    <Card
      key={a.id}
      id={a.attributes.id}
      title={a.attributes.title}
      author={a.attributes.author}
      summary={a.attributes.summary}
      tag={a.attributes.tag}
      image_url={a.attributes.image_url} />) 
  return articleCards
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(GridContent);