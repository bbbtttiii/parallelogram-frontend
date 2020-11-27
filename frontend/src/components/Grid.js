import React from 'react';
import { connect } from 'react-redux';
// import { GridContent } from './components/GridContent.js';
import { showArticles } from '../actions/article.js';
import { NavLink } from 'react-router-dom';
import Card from './Card.js';

const Grid = () => {
  return (
    <>
      {/* <GridContent /> */}
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
    </>
  )
}

const mapStateToProps = state => {
  // const { title, author, summary, content, tag } = state.article
  return {
    title: state.title,
  }
}

// export default Grid;
export default connect(mapStateToProps)(Grid);