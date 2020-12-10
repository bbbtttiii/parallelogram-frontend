import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { ...loginFormData, [name]: value }
    updateLoginForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    login(loginFormData, history)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="email"
        name="email"
        value={loginFormData.email}
        onChange={handleInputChange} />
      <input
        type="password"
        autoComplete="off"
        className="input-field"
        placeholder="password"
        name="password"
        value={loginFormData.password}
        onChange={handleInputChange} />
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)