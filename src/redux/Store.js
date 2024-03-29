// Libraries import
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducer import
import { statusReducer, serviceReducer, userReducer } from "./Reducer";

// Define the reducers of the store.
const reducers = combineReducers({
  user: userReducer,
  status: statusReducer,
  services: serviceReducer,
});

// Define the config of the redux persist store.
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "status"],
};

// Combine reducers and persist config.
const persistedReducer = persistReducer(persistConfig, reducers);

// The redux store.
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
