// src/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

const initialState = {
  isAuthenticated: !!token,
  token: token || null,
  username: username || null,
  role: role || null,
  profilephoto: "/avatar-1.png",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Login reducer called");
      const { token, username, role, profilephoto } = action.payload;

      // Set localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
      localStorage.setItem("profilephoto", profilephoto || state.profilephoto);

      // Update state
      state.isAuthenticated = true;
      state.token = token;
      state.username = username;
      state.role = role;
      state.profilephoto = profilephoto || state.profilephoto;
    },
    logout: (state) => {
      console.log("Logout reducer called");

      // Remove from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.removeItem("profilephoto");

      // Update state
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
      state.role = null;
      state.profilephoto = "/avatar-1.png";
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
