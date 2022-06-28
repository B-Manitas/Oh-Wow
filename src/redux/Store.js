import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducer";

/** The redux store. */
export const store = configureStore({
  reducer: { user: userReducer },
});
