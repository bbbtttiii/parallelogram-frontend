import React from 'react'
import GridContent from './GridContent.js'
import Issue from './Issue.js'
// import Loading from './Loading.js'

const Grid = props => {
  return (
    <>
      <div className="Issue">
        <Issue />
      </div>
      <div className="Grid">
        {/* <Loading /> */}
        <GridContent history={props.history} location={props.location} match={props.match} />
      </div>
    </>
  )
}

export default Grid