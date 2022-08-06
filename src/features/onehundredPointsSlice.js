import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOneHundred: false 
}

const oneHundredSlice = createSlice({
  name: "oneHundred",
  initialState,
  reducers: {
    isHundred: (state, action) => {
      state.isOneHundred = action.payload
    },
  },
});

export default oneHundredSlice.reducer;
export const { isHundred } = oneHundredSlice.actions;