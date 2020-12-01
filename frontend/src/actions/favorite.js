// export const addFavorite = favorite => {
//   return {
//     type: "ADD_FAVORITE",
//     favorite
//   }
// }

export const addFavorite = (userId, articleId) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/favorites', {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        article_id: articleId})
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch({
          type: "ADD_FAVORITE",
          favorite: response
        })
      }
    })
    .catch(console.log)
  }
}