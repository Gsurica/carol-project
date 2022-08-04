import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isYaiaDancing: false,
  turnYaiaOff: ""
}

const yaiaSlice = createSlice({
  name: "yaia",
  initialState,
  reducers: {
    setYaiaDancing: (state) => {
      state.isYaiaDancing = true;
    },
  }
});

export default yaiaSlice.reducer;
export const { setYaiaDancing, turnYaiaOff } = yaiaSlice.actions;