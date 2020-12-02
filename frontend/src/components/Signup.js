import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { ...signupFormData, [name]: value }
    updateSignupForm(updatedFormInfo)
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    signup(signupFormData, history)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="desired username"
        name="username"
        value={signupFormData.username}
        onChange={handleInputChange} />
      <input
        type="text"
        className="input-field"
        placeholder="email"
        name="email"
        value={signupFormData.email}
        onChange={handleInputChange} />
      <input
        type="password"
        autoComplete="off"
        className="input-field"
        placeholder="password"
        name="password"
        value={signupFormData.password}
        onChange={handleInputChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);