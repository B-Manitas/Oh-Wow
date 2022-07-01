// Import default state.
import { state_access, state_user, state_service } from "./State";

// Import actions types.
import {
  CONNECTION,
  DISCONNECTION,
  GAIN_ACCESS,
  LOSS_ACCESS,
  FETCH_SERVICES,
} from "./ActionsTypes";

/**
 * The user reducer for the redux store.
 * @param {Object} state The initial state.
 * @param {Object} action Object containing the action type and the payload.
 * @returns The new state.
 */
export const userReducer = (state = state_user, action) => {
  switch (action.type) {
    case CONNECTION:
      return { ...state, ...action.payload };

    case DISCONNECTION:
      return state_user;

    default:
      return state;
  }
};

export const accessReducer = (state = state_access, action) => {
  switch (action.type) {
    case GAIN_ACCESS:
      return { ...state, ...action.payload };

    case LOSS_ACCESS:
      return state;

    default:
      return state;
  }
};

export const serviceReducer = (state = state_service, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return action.payload;

    default:
      return state;
  }
};
