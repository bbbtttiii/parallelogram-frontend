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
          <button className="like" onClick={handleClick}>❤</button><br/>
          {targetArticle && targetArticle.relationships.favorites.data.length}<br/><br/>
          <a href="twitter.com"><img alt="Share on Twitter" src="/twitter.svg" width="40px"></img></a><br/>
          <a href="facebook.com"><img alt="Share on Facebook" src="/facebook.svg" width="40px"></img></a><br/>
          <a href="reddit.com"><img alt="Share on Reddit" src="/reddit.svg" width="40px"></img></a><br/>
          <a href="linkedin.com"><img alt="Share on Linkedin" src="/linkedin.svg" width="40px"></img></a><br/>
          <a href="gmail.com"><img alt="Share with Email" src="/gmail.svg" width="40px"></img></a>
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