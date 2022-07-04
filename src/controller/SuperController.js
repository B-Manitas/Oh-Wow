import _ from "lodash";
import Utils from "model/Utils";
import { state_user } from "store/State";
import { store } from "store/Store";

export class SuperController {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  /** Get the user data in the redux state. */
  get this_user_data() {
    return store.getState().user;
  }

  /** Get the user access in the redux state. */
  get this_user_access() {
    if (this.this_is_connected) return store.getState().access;
    else return undefined;
  }

  get this_is_connected() {
    return (
      this.this_user_data != null &&
      !Utils.isEquals(this.this_user_data, state_user)
    );
  }

  get this_is_admin() {
    return this.this_is_connected && this.this_user_access.access == "admin";
  }
}
