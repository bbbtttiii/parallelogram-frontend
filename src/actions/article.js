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

export const getArticles = () => {
  return dispatch => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/get_articles'
    return fetch(proxy + url, {
      credentials: "include",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'https://www.beniburg.com/parallelogram'

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