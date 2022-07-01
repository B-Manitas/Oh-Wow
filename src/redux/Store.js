import { configureStore } from "@reduxjs/toolkit";
import { accessReducer, serviceReducer, userReducer } from "./Reducer";

/** The redux store. */
export const store = configureStore({
  reducer: {
    user: userReducer,
    access: accessReducer,
    services: serviceReducer,
  },
});
