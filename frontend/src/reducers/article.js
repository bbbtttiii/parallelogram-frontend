/* eslint-disable import/no-anonymous-default-export */

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return { articles: action.articles }
    case 'ADD_ARTICLE':
      return { article: action.articleList.filter(a => a.id === action.articleId) }
      // return state.articles.filter(article => article.id === action.articleId)
    default:
      return state;
  }
}