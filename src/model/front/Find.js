import FailedLogin from "exceptions/data_error/FailedLogin";
import { SuperFrontend } from "./SuperFrontend";
import { CLIENT, ADMIN, EMPLOYEE } from "src/UserStatus";

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

  async allStaff(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allStaff.bind(get_back), ...funcs);
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
    const data = await this._actions(
      user,
      get_back.connect.bind(get_back),
      setAudit
    );

    if (data == null) throw new FailedLogin();
    else return data;
  }

  async allEmployed(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allEmployed.bind(get_back), ...funcs);
  }

  async status(id, ...funcs) {
    const resp = await this.backend.get.staff(id);

    var status = CLIENT;
    if (resp !== null && resp.is_admin) status = ADMIN;
    else if (resp !== null) status = EMPLOYEE;

    funcs.map((func) => func(status));
  }

  async appointment(id_salon, id_staff, ...funcs) {
    if (id_salon != "" && id_staff != "") {
      var resp = await this.backend.get.appointment(id_salon, id_staff);
      funcs.map((func) => func(resp));
    }
  }
}
