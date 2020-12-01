/* eslint-disable import/no-anonymous-default-export */

const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return (state + 1)
    case "REMOVE_FAVORITE":
      return (state - 1)
    default:
      return state
  }
}