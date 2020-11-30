/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  articles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return { ...state, articles: action.articles }
    default:
      return state;
  }
}