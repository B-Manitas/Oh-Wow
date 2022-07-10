// Import redux store.
import { store } from "./Store";

// Import actions types.
import {
  ADD_SERVICES,
  CONNECTION,
  DELETE_SERVICES,
  DISCONNECTION,
  FETCH_SERVICES,
  UPDATE_STATUS,
  DEFAULT_STATUS,
  UPDATE_SERVICES,
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

export const updateStatus = (status) => {
  creator(UPDATE_STATUS, { status });
};

export const defaultStatus = () => {
  creator(DEFAULT_STATUS);
};

export const fetchServices = (services) => {
  creator(FETCH_SERVICES, services);
};

export const deleteService = (id) => {
  creator(DELETE_SERVICES, { id });
};

export const addService = (service) => {
  creator(ADD_SERVICES, { service });
};

export const updateService = (service) => {
  creator(UPDATE_SERVICES, { service });
};
