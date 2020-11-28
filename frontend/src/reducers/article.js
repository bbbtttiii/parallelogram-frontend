/* eslint-disable import/no-anonymous-default-export */

// const initialState = [
//   {
//     title: '',
//     author: '',
//     summary: '',
//     content: '',
//     tag: ''
//   }
// ]

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return {articles: action.articleList}
      // return [{
      //   title: action.title,
      //   author: action.author,
      //   summary: action.summary,
      //   contenet: action.content,
      //   tag: action.tag
      // }]
    case 'ADD_ARTICLE':
      return state.articles.filter(article => article.id === action.articleId)
    default:
      return state;
  }
}