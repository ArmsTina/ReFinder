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

let language = createSlice({
  name: "language",
  initialState: "kr",
  reducers: {
    setLanguage(state, lang) {
      console.log("Current state: ", state);
      if (lang.payload == "en") {
        console.log("Changed state: ", lang.payload);
        return "en";
      } else if (lang.payload == "kr") {
        console.log("Changed state: ", lang.payload);
        return "kr";
      } else {
        // 혹시나 모르니까 ㅎㅎ
        return "en";
      }
    },
  },
});

export let { setDarkMode } = darkMode.actions;
export let { setLanguage } = language.actions;

export default configureStore({
  reducer: {
    darkMode: darkMode.reducer,
    language: language.reducer,
  },
});
