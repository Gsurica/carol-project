import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loveCount: 0,
  heartColor: "currentcolor"
}

const loveSlice = createSlice({
  name: "loveCount",
  initialState,
  reducers: {
    incrementLove: (state) => {
      state.loveCount++
    },
    changeHeart: (state, action) => {
      state.heartColor === action.payload
    }
  }
});

export default loveSlice.reducer;
export const { incrementLove, changeHeart } = loveSlice.actions;