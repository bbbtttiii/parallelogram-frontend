/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  title: '',
  author: '',
  summary: '',
  content: '',
  tag: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return state.articles
    case 'ADD_ARTICLE':
      return state.articles.filter(article => article.id === action.articleId)
    default:
      return state;
  }
}