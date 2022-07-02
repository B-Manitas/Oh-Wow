import { ErrorsCatcher } from "./ErrorsCatcher";
import { store } from "redux-store/Store";

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
    this.is_connected = false;
  }

  /** Get the user data in the redux state. */
  get user_data() {
    return store.getState().user;
  }

  /** Get the user access in the redux state. */
  get user_access() {
    if (this.is_connected) return store.getState().access;
    else return false;
  }

  async getAllSalons(...funcs) {
    const data = await this.frontend.getSalonData();
    funcs.forEach((func) => func(data));
  }

  async getAllServices(...funcs) {
    const data = store.getState().services;
    funcs.forEach((func) => func(data));
  }

  async isAdmin() {
    return (
      this.user_data._id != undefined &&
      (await this.frontend.isAdmin(this.user_data._id))
    );
  }
}
