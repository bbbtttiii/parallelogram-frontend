// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURENT_USER',
    user: user
  }
}


// asynchronous action creators
export const login = info => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch()
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_current_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch()
  }
}