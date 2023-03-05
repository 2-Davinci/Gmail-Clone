import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../Features/mailSlice";
import userReducer from "../Features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
