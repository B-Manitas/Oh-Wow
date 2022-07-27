import _ from "lodash";
import { STATE_USER } from "store/State";
import { store } from "store/Store";
import { ADMIN, EMPLOYEE } from "src/UserStatus";

export class SuperController {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  /** Get the user data in the redux state. */
  get thisUserData() {
    return store.getState().user;
  }

  /** Get the user status in the redux state. */
  get this_user_access() {
    if (this.thisIsConnected) return store.getState().status;
    else return undefined;
  }

  get thisIsConnected() {
    return (
      this.thisUserData != null && !_.isEqual(this.thisUserData, STATE_USER)
    );
  }

  thisIsAdmin() {
    return this.thisIsConnected && this.this_user_access.status == ADMIN;
  }

  get thisIsStaff() {
    return this.thisIsConnected && this.this_user_access.status == EMPLOYEE;
  }
}
