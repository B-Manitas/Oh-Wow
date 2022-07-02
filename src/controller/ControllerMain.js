import { ErrorsCatcher } from "./ErrorsCatcher";
import { store } from "redux-store/Store";
import _ from "lodash";
import { state_user } from "../redux/State";

export class ControllerMain extends ErrorsCatcher {
  /**
   * Manage the link between the application and the user.
   * @param {Backend} backend The backend of the application.
   * @param {Frontend} frontend The frontend of the application.
   */
  constructor(backend, frontend) {
    super();
    this.backend = backend;
    this.frontend = frontend;
  }

  /** Get the user data in the redux state. */
  get user_data() {
    return store.getState().user;
  }

  /** Get the user access in the redux state. */
  get user_access() {
    if (this.isConnected()) return store.getState().access;
    else return undefined;
  }

  async getAllSalons(...funcs) {
    const data = await this.frontend.getSalonData();
    funcs.forEach((func) => func(data));
  }

  async getAllServices(...funcs) {
    const data = store.getState().services;
    funcs.forEach((func) => func(data));
  }

  isConnected() {
    return !_.isEqual(this.user_data, state_user);
  }

  async isAdmin() {
    return (
      this.user_data._id != undefined &&
      (await this.frontend.isAdmin(this.user_data._id))
    );
  }
}
