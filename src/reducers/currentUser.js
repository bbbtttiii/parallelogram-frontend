/* eslint-disable import/no-anonymous-default-export */

export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "CLEAR_CURRENT_USER":
      return null
    case "ADD_FAVORITE":
      return {
        ...state,
        relationships: {
          ...state.relationships,
          favorites: {
            ...state.relationships.favorites,
            data: [
              ...state.relationships.favorites.data,
              action.favorite
            ]
          }
        }
      }
    default:
      return state
  }
}