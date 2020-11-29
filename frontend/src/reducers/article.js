/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  articles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return { ...state, articles: action.articles }
    // case 'ADD_ARTICLE':
    //   return { ...state, articles: action.articles.filter(a => a.id === action.articleId) }
    default:
      return state;
  }
}