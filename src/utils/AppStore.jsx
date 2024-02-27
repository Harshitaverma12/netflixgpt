import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice";
import gptReducer from "./gptSlice";
import configLangReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    configLang: configLangReducer,
  },
});

export default appStore;
