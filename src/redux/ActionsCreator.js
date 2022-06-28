import { CONNECTION, DISCONNECTION } from "./ActionsTypes";
import { store } from "./Store";

const creator = (type, payload = {}) => {
  return store.dispatch({ type, payload });
};

export const addUserStore = (user) => {
  return creator(CONNECTION, user);
};

export const removeUserStore = () => {
  return creator(DISCONNECTION);
};
