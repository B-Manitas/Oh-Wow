// Import default state.
import { access_state, user_state } from "./State";

// Import actions types.
import {
  CONNECTION,
  DISCONNECTION,
  GAIN_ACCESS,
  LOSS_ACCESS,
} from "./ActionsTypes";

/**
 * The user reducer for the redux store.
 * @param {Object} state The initial state.
 * @param {Object} action Object containing the action type and the payload.
 * @returns The new state.
 */
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

export const accessReducer = (state = access_state, action) => {
  switch (action.type) {
    case GAIN_ACCESS:
      return { ...state, ...action.payload };

    case LOSS_ACCESS:
      return state;

    default:
      return state;
  }
};
