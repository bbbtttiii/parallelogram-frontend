/* eslint-disable import/no-anonymous-default-export */

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return state.articles
    case 'GET_ARTICLE':
      return state.articles.filter(article => article.id === action.articleId)
    default:
      return state;
  }
}