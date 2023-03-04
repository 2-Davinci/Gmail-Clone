import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../Features/mailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
