import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { ...loginFormData, [name]: value }
    updateLoginForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    login(loginFormData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={loginFormData.username}
        onChange={handleInputChange} />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={loginFormData.password}
        onChange={handleInputChange} />
      <input type="submit" value="Log In"/>
    </form>
  )
}

// gives argument coming in to component:
// {
//   username: "foo",
//   password: "password"
// }
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

// const mapDispatchToProps

export default connect(mapStateToProps, { updateLoginForm, login })(Login);