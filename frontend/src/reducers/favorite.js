/* eslint-disable import/no-anonymous-default-export */



export default (state = null, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return action.user
    case "REMOVE_FAVORITE":
      return null
    default:
      return state
  }
}