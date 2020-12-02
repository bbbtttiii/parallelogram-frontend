import React from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../actions/favorite.js'
// import { SocialIcon } from 'react-social-icons'

                                                       //article id coming from router
const Sidebar = ({ loggedIn, addFavorite, currentUser, articleId, articles }) => {

  const handleClick = () => {
    addFavorite(currentUser.id, articleId)
  }
  
  const targetArticle = articles.find(a => a.id === articleId)

  return (
    loggedIn
      ? <div className="Sidebar">
          <button className="like" onClick={handleClick}>❤</button> <br/>
          {targetArticle && targetArticle.relationships.favorites.data.length}
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