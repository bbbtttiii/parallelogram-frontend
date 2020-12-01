/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  articles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLES':
      return { ...state, articles: action.articles }
    case 'FILTER_ARTICLES':
      return state.tags.filter(a => a.tag === action.payload.tag)
    case "ADD_FAVORITE":
      
      //find current article
      let currentArticle = state.articles.find(a => a.id === action.favorite.data.attributes.article_id)
      
      //added to list
      currentArticle.relationships.favorites.data = [...currentArticle.relationships.favorites.data, action.favorite]

      //map thru collection of articles and replace with updated version
      let articles = state.articles.map(a => (a.id === currentArticle.id ? currentArticle : a))

      return {
        articles: articles
      }

      // debugger
      
      // let updated = articles.map((a) => {
      //   if (a.id === currentArticle.id) {
      //     return currentArticle
      //   } else {
      //     return a
      //   }
      // })

      // return updated
      

      // return {
      //   ...state,
      //   articles: {
      //     ...state.articles,
      //     relationships: {
      //       ...state.articles,
      //       favorites: {
      //         ...state.relationships.favorites,
      //         data: [
      //           ...state.relationships.favorites.data,
      //           updated
      //         ]
      //       }
      //     }
      //   }
      //  }
    default:
      return state;
  }
}