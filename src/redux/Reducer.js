// Import default state.
import { STATE_STATUS, STATE_USER, state_service } from "./State";

// Import actions types.
import {
  CONNECTION,
  DISCONNECTION,
  UPDATE_STATUS,
  DEFAULT_STATUS,
  FETCH_SERVICES,
  DELETE_SERVICES,
  ADD_SERVICES,
  UPDATE_SERVICES,
} from "./ActionsTypes";

/**
 * The user reducer for the redux store.
 * @param {Object} state The initial state.
 * @param {Object} action Object containing the action type and the payload.
 * @returns The new state.
 */
export const userReducer = (state = STATE_USER, action) => {
  switch (action.type) {
    case CONNECTION:
      return { ...state, ...action.payload };

    case DISCONNECTION:
      return STATE_USER;

    default:
      return state;
  }
};

export const statusReducer = (state = STATE_STATUS, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...state, ...action.payload };

    case DEFAULT_STATUS:
      return STATE_STATUS;

    default:
      return state;
  }
};

export const serviceReducer = (state = state_service, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return [...action.payload];

    case ADD_SERVICES:
      return [...state, action.payload.service];

    case UPDATE_SERVICES:
      const id = state.findIndex((s) => s._id === action.payload.service._id);

      if (id == -1) return [...state, action.payload.service];
      else
        return state.map((item, i) => {
          if (id == i) return action.payload.service;
          else return item;
        });

    case DELETE_SERVICES:
      return state.filter((item) => item._id !== action.payload.id);

    default:
      return state;
  }
};
