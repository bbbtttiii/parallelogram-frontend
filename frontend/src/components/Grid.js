import React from 'react';
import GridContent from './GridContent.js'
import Issue from './Issue.js'

const Grid = () => {
  return (
    <div className="Grid">
      <Issue />
      <GridContent />
    </div>
  )
}

export default Grid;