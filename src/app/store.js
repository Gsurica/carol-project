import { configureStore } from "@reduxjs/toolkit"; 
import loveReducer from "../features/loveSlice";
import yaiaReducer from "../features/yaiaState";

export const store = configureStore({
  reducer: {
    love: loveReducer,
    yaia: yaiaReducer,
  }
});


export default store;