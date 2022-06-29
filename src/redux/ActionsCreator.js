// Import redux store.
import { store } from "./Store";

// Import actions types.
import {
  CONNECTION,
  DISCONNECTION,
  GAIN_ACCESS,
  LOSS_ACCESS,
} from "./ActionsTypes";

/**
 * The default redux creator.
 * @param {ActionTypes} type The type of the action.
 * @param {Object} payload The payload.
 */
const creator = (type, payload = {}) => {
  store.dispatch({ type, payload });
};

/**
 * Store user info.
 * @param {Object} user The user data to store.
 */
export const addUserStore = (user) => {
  creator(CONNECTION, user);
};

/** Remove user data in the store. */
export const removeUserStore = () => {
  creator(DISCONNECTION);
};

export const gainAccess = (access) => {
  creator(GAIN_ACCESS, { access });
};

export const lossAccess = () => {
  creator(LOSS_ACCESS);
};
