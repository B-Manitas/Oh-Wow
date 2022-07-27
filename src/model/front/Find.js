import FailedLogin from "exceptions/data_error/FailedLogin";
import { SuperFrontend } from "./SuperFrontend";
import { CLIENT, ADMIN, EMPLOYEE } from "src/UserStatus";

export class Find extends SuperFrontend {
  async _get(backendGetFunc, ...funcs) {
    const data = await backendGetFunc();
    funcs.map((func) => func(data));
    return data;
  }

  /**
   * Get all users stored in the database.
   * @param {...Function} funcs The functions to set users data.
   * @returns a list of users.
   */
  async allUsers(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allUsers.bind(get_back), ...funcs);
  }

  /**
   * Get all staff stored in the database.
   * @param {...Function} funcs The functions to set staff data.
   * @returns a list of staff.
   */
  async allStaff(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allStaff.bind(get_back), ...funcs);
  }

  /**
   * Fetch user staff with their user data in the database.
   * @param  {...Function} funcs The functions to set data.
   * @returns a list of staff with their data.
   */
  async allUserStaff(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.allUserStaff.bind(get_back), ...funcs);
  }

  /**
   * Get all services stored in the database.
   * @param {...Function} funcs The functions to set services data.
   * @returns a list of services.
   */
  async allServices(isAdmin, ...funcs) {
    const data = await this.backend.get.allServices(isAdmin);
    funcs.map((func) => func(data));
  }

  /**
   * Get all services to display in the homepage stored in the database.
   * @param {...Function} funcs The functions to set list of home services.
   * @returns a list of services.
   */
  async homeServices(...funcs) {
    const get_back = this.backend.get;
    return await this._get(get_back.homeServices.bind(get_back), ...funcs);
  }

  /**
   * Get all salon stored in the database.
   * @param {...Function} funcs The functions to set list of salons.
   * @returns a list of salons.
   */
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

    if (data == null) throw new FailedLogin(setAudit);
    else return data;
  }

  /**
   * Get the status of a user: ADMIN, EMPLOYEE, CLIENT.
   * @param {*} id The ID of the user.
   * @param {...Function} funcs The functions to set the status.
   */
  async status(id, ...funcs) {
    const resp = await this.backend.get.staff(id);

    var status = CLIENT;
    if (resp !== null && resp.is_admin) status = ADMIN;
    else if (resp !== null) status = EMPLOYEE;

    funcs.map((func) => func(status));
  }

  /**
   * Get planning of staff.
   * @param {String} staffID The ID of the staff.
   * @returns a list of objects.
   */
  async planningStaff(staffID, ...funcs) {
    if (staffID != "") {
      const resp = await this.backend.get.planningStaff(staffID);
      funcs.map((func) => func(resp));
    }
  }

  /**
   * Get plannings of staff between a range date.
   * @param {String} staffID The ID of the staff.
   * @param {Number} beginDate The timestamp of the begin date to filter appointments
   * @param {Number} endDate The timestamp of the end date to filter appointments
   * @param {...Function} funcs The functions to set list of appointments.
   */
  async planningStaffBetweenDates(id_staff, date_str, date_end, ...funcs) {
    const resp = await this.backend.get.planningStaffBetweenDates(
      id_staff,
      date_str,
      date_end
    );

    funcs.map((func) => func(resp));
  }

  /**
   * Get all upcoming or historic appointments of a user.
   * @param {String} userID The user ID.
   * @param {*} isHistoric If true get historic appointments. Otherwise get
   * upcomming appointments.
   * @param {...Function} funcs The functions to set list of appointments.
   */
  async userApt(id, is_historic, ...funcs) {
    const resp = await this.backend.get.userApt(id, is_historic);
    funcs.map((func) => func(resp));
  }

  /**
   * Get all appointments of user.
   * @param {String} ID The user id.
   * @param {...Function} funcs The functions to set list of appointment.
   */
  async userAllApts(id, ...funcs) {
    const resp = await this.backend.get.userAllApts(id);
    funcs.map((func) => func(resp));
  }

  /**
   * Get app data store in the database.
   * @param {...Function} funcs The functions to set app data.
   */
  async app(...funcs) {
    const resp = await this.backend.get.app();
    funcs.map((func) => func(resp));
  }
}
