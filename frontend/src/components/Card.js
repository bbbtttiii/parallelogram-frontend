import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = article => {
  return (
    <div className="Card">
      <div className="card-photo">
        <NavLink to ={`/articles/${article.id}`}>
          <img src={`${article.image_url}`} alt="article" />
        </NavLink>
      </div>
      <h1 className="card-title">
        <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
      </h1>
      <div className="card-details">
        {article.author}<NavLink to={`/${article.tag}`}>{article.tag}</NavLink>
      </div>
      <div className="card-summary">
        {article.summary}
      </div>
    </div>
  )
}

export default Card