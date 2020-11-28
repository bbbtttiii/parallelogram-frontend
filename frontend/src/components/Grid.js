import React from 'react';
import { connect } from 'react-redux';
import { showArticles, getArticles } from '../actions/article.js';
import { NavLink } from 'react-router-dom';
import Card from './Card.js';
import GridContent from './GridContent.js'

const Grid = props => {
  return (
    <div className="Grid">
      <GridContent />
    </div>
  )
}

export default Grid;