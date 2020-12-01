import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/favorite.js'
// import { SocialIcon } from 'react-social-icons'

//article id coming from router
const Sidebar = ({ loggedIn, addFavorite, currentUser, articleId, favorites, articles }) => {

  console.log("favorite count", favorites)

  const handleClick = e => {
    // e.preventDefault()
    addFavorite(currentUser.id, articleId)
  }

  return (
    loggedIn
      ? <div className="Sidebar">
          <button className="like" onClick={handleClick}>❤</button> <br/>
          {articles.find(a => a.id === articleId) && articles.find(a => a.id === articleId).relationships.favorites.data.length}
        </div>
      : null
  )
}

const mapStateToProps = ({ currentUser, favorites, articles }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
    favorites,
    articles: articles.articles
  }
}

export default connect(mapStateToProps, { addFavorite })(Sidebar)