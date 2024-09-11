// src/store.js
import { createStore } from 'redux';

const initialState = {
  auth: {
    isAuthenticated: false,
    token: null,
    username: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: true,
          token: action.payload.token, // Save token
          username: action.payload.username, // Save username
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
          token: null,
          username: null,
        },
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
