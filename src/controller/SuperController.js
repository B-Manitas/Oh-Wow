import _ from "lodash";
import Utils from "model/Utils";
import { state_user } from "store/State";
import { store } from "store/Store";
import { ADMIN, EMPLOYEE } from "src/UserStatus";

export class SuperController {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  /** Get the user data in the redux state. */
  get this_user_data() {
    return store.getState().user;
  }

  /** Get the user status in the redux state. */
  get this_user_access() {
    if (this.this_is_connected) return store.getState().status;
    else return undefined;
  }

  get this_is_connected() {
    return (
      this.this_user_data != null &&
      !Utils.isEquals(this.this_user_data, state_user)
    );
  }

  get this_is_admin() {
    return this.this_is_connected && this.this_user_access.status == ADMIN;
  }

  get this_is_employee() {
    return this.this_is_connected && this.this_user_access.status == EMPLOYEE;
  }
}
