import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { ...signupFormData, [name]: value }
    updateSignupForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    signup(signupFormData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={signupFormData.username}
        onChange={handleInputChange} />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={signupFormData.password}
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
    signupFormData: state.signupForm
  }
}

// const mapDispatchToProps

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);