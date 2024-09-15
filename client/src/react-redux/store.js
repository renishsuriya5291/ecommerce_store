// src/store.js
import { createStore } from 'redux';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
const role = localStorage.getItem('role');

const initialState = {
  auth: {
    isAuthenticated: !!token,
    token: token,
    username: username,
    role: role,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('role', action.payload.role);

      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: true,
          token: action.payload.token,
          username: action.payload.username,
          role: action.payload.role,
        },
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
          token: null,
          username: null,
          role: null,
        },
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
