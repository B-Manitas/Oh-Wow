import { createSlice } from "@reduxjs/toolkit";
import { user_state } from "./State";

export const userSlice = createSlice({
  name: "user",
  initialState: user_state,
  reducers: {
    connection: (payload) => payload,
    disconnection: () => ({ ...user_state }),
  },
});

export const { connection, disconnection } = userSlice.actions;
export default userSlice.reducer;
