import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth.slice";
import testSlice from "../slices/test.slice";
import  darkModeSlice  from "../slices/dark.slice";
import languageSlice from "../slices/language.slice";

export default configureStore({
  // c'est ici que le reducer prend son nom // 
  reducer: {
    auth:   authSlice,
    test: testSlice,
    dark: darkModeSlice,
    language: languageSlice
  },

});
