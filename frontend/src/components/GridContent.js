import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card.js';

const GridContent = props => {

  console.log("articles loaded in gridcontent component", props.articles)

  //if on homepage filterarticles shhould be all articles
  //if nonexistent url, redirect back to home route

  const filterArticles = props.articles.filter(a => a.attributes.tag === props.match.params.tag)
                       //point filterArticles to a function with logic
  const articleCards = filterArticles.map(a =>
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