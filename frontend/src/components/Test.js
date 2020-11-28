import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Test = (props) => {
  console.log("in test component", props.articles)
  return "hello"
  // const articleCards = props.articles.map(a => (<p key={a.id}><NavLink to={`/${a.id}`}>{a.attributes.title}</NavLink></p>))
  // return articleCards
}

const mapStateToProps = state => {
  // const { title, author, summary, content, tag } = state.article
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Test);