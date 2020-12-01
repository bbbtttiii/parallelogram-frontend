import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/favorite.js'
// import { SocialIcon } from 'react-social-icons'

const Sidebar = ({ props, loggedIn }) => {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    loggedIn ?
      <>
        <button className="like" onClick={() => handleClick}>❤</button> <br/>
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

export default connect(mapStateToProps, { addFavorite })(Sidebar)