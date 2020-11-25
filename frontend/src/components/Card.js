import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <div className="Card">
      <h1 className="card-title"><NavLink to='/article'>This is a card title. What happens when it gets really long huh?</NavLink></h1>
      <div className="card-photo"><NavLink to ='/article'>Photo</NavLink></div>
      <div className="card-details">By Asdf Asdf <NavLink to='/tag'>Science</NavLink></div>
      <div className="card-summary">
        ASsfd sdf lsdf sdf sdfsfd sdf sdf sdf sdf sdf fsdsdf sdf. sdglkjsdf  sadf sdflskdjfsdfsdf sf sdfsdf sdf s sdf sdflsk.
      </div>
    </div>
  )
}

export default Card;


// For dynamic Links:

// let articleId = {article.id}
// <NavLink to={`/${articleId}`} className="nav-link">TEXT</NavLink>