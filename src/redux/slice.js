import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("language") || "en",
  mode: localStorage.getItem("mode") || "light",
  cart: [],
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setLanguage, toggleMode, addToCart } = siteSlice.actions;
export default siteSlice.reducer;
