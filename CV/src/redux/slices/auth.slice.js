import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("tokenBlog");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    fetchAuth: storedToken
      ? {
          id: "",
          email: "",
          token: storedToken,
          pseudo: "",
        }
      : null,
  },
  reducers: {
    setAuth: (state, { payload }) => {
      state.fetchAuth = payload;
    },
    clearAuth: (state) => {
      state.fetchAuth = null;
    }
  },
});

export const { setAuth } = authSlice.actions;

export const getAuth = (state) => state.auth.fetchAuth;

export const getPseudo = (state) => state.auth.fetchAuth?.pseudo;

export const getToken = (state) => state.auth.fetchAuth?.token;

export default authSlice.reducer;
