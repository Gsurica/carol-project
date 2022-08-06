import { configureStore } from "@reduxjs/toolkit"; 

import loveReducer from "../features/loveSlice";
import yaiaReducer from "../features/yaiaState";
import progressBarReducer from "../features/progressBarSlice";
import presentReducer from "../features/presentModalSlice";
import oneHundredReducer from "../features/onehundredPointsSlice";

export const store = configureStore({
  reducer: {
    love: loveReducer,
    yaia: yaiaReducer,
    progress: progressBarReducer,
    presentLink: presentReducer,
    oneHundred: oneHundredReducer,
  }
});


export default store;