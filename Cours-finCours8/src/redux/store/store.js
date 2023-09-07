import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth.slice";
import testSlice from "../slices/test.slice";
import blogSlice from "../slices/blog.slice";

export default configureStore({
  // c'est ici que le reducer prend son nom // 
  reducer: {
    auth:   authSlice,
    test: testSlice,
    blog: blogSlice
  },

});
