import React from 'react';
import { connect } from 'react-redux';
import { showArticles } from '../actions/article.js'
import Card from './Card.js';

const Grid = () => {
  return (
    <div className="Grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

const mapStateToProps = state => {
  const { title, author, summary, content, tag } = state.article
  return {
    title,
    author,
    summary,
    content,
    tag
  }
}

// export default Grid;
export default connect(mapStateToProps, { showArticles })(Grid);