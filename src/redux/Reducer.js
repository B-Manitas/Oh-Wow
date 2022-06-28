import { CONNECTION, DISCONNECTION } from "./ActionsTypes";
import { user_state } from "./State";

export const userReducer = (state = user_state, action) => {
  switch (action.type) {
    case CONNECTION:
      return { ...state, ...action.payload };

    case DISCONNECTION:
      return user_state;

    default:
      return state;
  }
};
