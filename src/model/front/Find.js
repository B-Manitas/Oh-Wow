import FailedLogin from "exceptions/data_error/FailedLogin";
import { SuperFrontend } from "./SuperFrontend";

export class Find extends SuperFrontend {
  async _get(backendGetFunc, ...funcs) {
    const data = await backendGetFunc();
    funcs.map((func) => func(data));
    return data;
  }

  async allUsers(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allUsers.bind(get_back), ...funcs);
  }

  async allAccess(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allAccess.bind(get_back), ...funcs);
  }

  async allServices(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allServices.bind(get_back), ...funcs);
  }

  async allSalons(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allSalons.bind(get_back), ...funcs);
  }

  /**
   * Send a connection request in the backend for a user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after connection.
   *
   * @throws {FailedLogin} If the user has not yet been registered.
   */
  async connect(user, setAudit) {
    const get_back = this.backend.get;
    const resp = await this._actions(user, get_back.user.bind(get_back), setAudit);

    if (resp == null) throw new FailedLogin();
    else return resp;
  }
}
