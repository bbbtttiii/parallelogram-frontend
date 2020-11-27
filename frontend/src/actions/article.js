//sync
export const showArticles = () => {
  return {
    type: 'GET_ARTICLES',
  }
}


//async
export const getArticles = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_articles', {
      // credentials: "include",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
      }
    })
    .catch(console.log)
  }
}