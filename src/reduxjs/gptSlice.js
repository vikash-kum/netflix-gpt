import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearches: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearches = !state.showGptSearches;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
