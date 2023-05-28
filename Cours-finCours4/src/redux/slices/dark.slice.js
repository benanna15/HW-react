import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false, // Définissez l'état initial sur false (mode clair)
  reducers: {
    toggleDarkMode: (state) => {
      return !state; // Inversez la valeur du mode sombre
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
