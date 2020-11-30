import React from 'react';
import GridContent from './GridContent.js'
import Issue from './Issue.js'

const Grid = props => {
  return (
    <>
    {/* <Issue /> */}
    <div className="Grid">
      <GridContent history={props.history} location={props.location} match={props.match} />
    </div>
    </>
  )
}

export default Grid;