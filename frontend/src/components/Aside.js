import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/favorite.js'
// import { SocialIcon } from 'react-social-icons'

const Aside = ({ props, loggedIn }) => {

  const handleClick = e => {
    e.console.log("liked")
  }

  return (
    loggedIn ?
      <>
        <button name="like" className="like" onClick={() => handleClick}>❤</button> <br/>
      </> : null
  )
}


const mapStateToProps = ({ currentUser, favorites }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
    favorites
  }
}

export default connect(mapStateToProps, { addFavorite })(Aside)