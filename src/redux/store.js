// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./slice";

export const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});
