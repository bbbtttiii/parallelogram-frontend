// import article from "../reducers/article"

//sync
export const showArticles = articles => {
  console.log(articles)
  return {
    type: 'ADD_ARTICLES',
    articles
  }
}

// dispatch({ type: 'ADD_CATS', cats: responseJSON.images })

//async
export const getArticles = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_articles', {
      credentials: "include",
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
        dispatch(showArticles(response.data))
      }
    })
    .catch(console.log)
  }
}