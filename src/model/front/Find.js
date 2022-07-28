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
    const getBack = this.backend.get;
    return await this._get(getBack.allUsers.bind(getBack), ...funcs);
  }

  /**
   * Get all staff stored in the database.
   * @param {...Function} funcs The functions to set staff data.
   * @returns a list of staff.
   */
  async allStaffs(...funcs) {
    const getBack = this.backend.get;
    return await this._get(getBack.allStaffs.bind(getBack), ...funcs);
  }

  /**
   * Get all staff stored in the database.
   * @param {...Function} funcs The functions to set staff data.
   * @returns a list of staff.
   */
  async allEmployee(...funcs) {
    const getBack = this.backend.get;
    return await this._get(getBack.allEmployee.bind(getBack), ...funcs);
  }

  /**
   * Fetch user staff with their user data in the database.
   * @param  {...Function} funcs The functions to set data.
   * @returns a list of staff with their data.
   */
  async allUserStaff(...funcs) {
    const getBack = this.backend.get;
    return await this._get(getBack.allUserStaff.bind(getBack), ...funcs);
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
    const getBack = this.backend.get;
    return await this._get(getBack.homeServices.bind(getBack), ...funcs);
  }

  /**
   * Get all salon stored in the database.
   * @param {...Function} funcs The functions to set list of salons.
   * @returns a list of salons.
   */
  async allSalons(...funcs) {
    const getBack = this.backend.get;
    return await this._get(getBack.allSalons.bind(getBack), ...funcs);
  }

  /**
   * Get user data stored in the database.
   * @returns user data.
   */
  async user(id) {
    return await this.backend.get.user(id);
  }

  /**
   * Send a connection request in the backend for a user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after connection.
   *
   * @throws {FailedLogin} If the user has not yet been registered.
   */
  async connect(user, setAudit) {
    const getBack = this.backend.get;
    const data = await this._actions(
      user,
      getBack.connect.bind(getBack),
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

  /**
   * Get access of a user in the database.
   * @param {String} iduncs The user ID.
   * @param {...Function} funcs The functions to set access data.
   */
  async access(id, access) {
    return await this.backend.get.access(id, access);
  }
}
