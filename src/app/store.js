import { configureStore } from "@reduxjs/toolkit"; 
import loveReducer from "../features/loveSlice";

export const store = configureStore({
  reducer: {
    love: loveReducer,
  }
});


export default store;