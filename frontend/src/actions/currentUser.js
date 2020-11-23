// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURENT_USER',
    user: user
  }
}


// async action creators
export const login = info => {
  console.log('credentials are:', info)
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
  }
}