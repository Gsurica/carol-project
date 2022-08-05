import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false 
}

const presentModalSlice = createSlice({
  name: "present",
  initialState,
  reducers: {
    turnOn: (state, action) => {
      state.state = action.payload 
    },
  },
});

export default presentModalSlice.reducer;
export const { turnOn } = presentModalSlice.actions;