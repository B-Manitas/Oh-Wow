// Import default state.
import { user_state } from "./State";

// Import actions types.
import { CONNECTION, DISCONNECTION } from "./ActionsTypes";

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
