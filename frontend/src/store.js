import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import favorites from './reducers/favorites.js'
import signupForm from './reducers/signupForm.js'
import article from './reducers/article.js'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  user: usersReducer,
  currentUser: currentUser,
  loginForm: loginForm,
  favorites: favorites,
  signupForm: signupForm,
  article: article
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;