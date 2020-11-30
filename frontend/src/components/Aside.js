import React from 'react'
import { connect } from 'react-redux'

const Aside = ({ loggedIn }) => {
  return (
      loggedIn ? <button className="like">❤</button> : null
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Aside)