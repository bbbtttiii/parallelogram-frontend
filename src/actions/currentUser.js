import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'

// synchronous action creators - no data to fetch - pure functions
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

// asynchronous action creators (redux-thunk)
export const login = (info, history) => {
  return dispatch => {
    // const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/login'
    return fetch(url, {
      credentials: "include",
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(info)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(resetLoginForm())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const signup = (info, history) => {
  return dispatch => {
    const userInfo = {
      user: info
    }
    // const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/signup'
    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(resetSignupForm())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser())
    // const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/logout'
    return fetch(url, {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    // const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://parallelogram-api.herokuapp.com/api/v1/get_current_user'
    return fetch(url, {
      credentials: "include",
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
      }
    })
    .catch(console.log)
  }
}