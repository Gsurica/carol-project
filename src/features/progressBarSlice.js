import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  styleState: {
    width: 0,
  },
}

const progressBarSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    incrementLove: (state) => {
      state.counter++;
    },
    incrementStyle: (state, action) => {
      state.styleState.width = action.payload;
    },
    checkLoveHandler: (state, action) => {
      state.counter = action.payload
    } 
  },
});

export default progressBarSlice.reducer;
export const { incrementLove, incrementStyle, checkLoveHandler } = progressBarSlice.actions;