import { configureStore, createSlice } from "@reduxjs/toolkit";

let darkMode = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    setDarkMode(state) {
      return !state;
    },
  },
});

export let { setDarkMode } = darkMode.actions;

export default configureStore({
  reducer: {
    darkMode: darkMode.reducer,
  },
});
