export const updateLoginForm = (formData) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    formData
  }
}

export const resetLoginForm = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}