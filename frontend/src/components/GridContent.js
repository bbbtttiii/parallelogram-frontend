import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card.js';

const GridContent = props => {
  console.log("in gridcontent", props.articles)
  const articleCards = props.articles.map(a =>
    <Card
      key={a.id}
      id={a.attributes.id}
      title={a.attributes.title}
      author={a.attributes.author}
      summary={a.attributes.summary}
      tag={a.attributes.tag}
      image_url={a.attributes.image_url} />) 
  // const articleCards = props.articles.map(a => (<p key={a.id}><NavLink to={`/${a.id}`}>{a.attributes.title}</NavLink></p>))
  return articleCards
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(GridContent);