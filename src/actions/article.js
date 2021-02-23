export const showArticles = articles => {
  return {
    type: 'ADD_ARTICLES',
    articles
  }
}

export const filterArticlesByTag = tag => {
  return {
    type: 'FILTER_ARTICLES',
    tag
  }
}

export const filterArticlesByAuthor = author => {
  return {
    type: 'FILTER_AUTHORS',
    author
  }
}

export const getArticles = () => {
  return dispatch => {
    return fetch('https://parallelogram-api.herokuapp.com/api/v1/get_articles', {
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