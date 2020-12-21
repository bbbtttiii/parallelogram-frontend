export const addFavorite = (userId, articleId) => {
  return dispatch => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/favorites'
    return fetch(proxy + url, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'https://parallelogram.herokuapp.com'

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