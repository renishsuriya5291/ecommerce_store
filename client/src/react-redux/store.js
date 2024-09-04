// src/store.js
import { createStore } from 'redux';

const initialState = {
  auth: {
    isAuthenticated: false,
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
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
