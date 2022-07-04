import { Approver } from "./Approver";
import InvalidDataError from "exceptions/InvalidDataError";

export class SuperFrontend extends Approver {
  constructor(backend) {
    super();
    this.backend = backend;
  }

  /**
   * To call a function in the backend.
   * @param {Object} data The data entered by the user.
   * @param {Function} func_backend The function to call in the backend.
   * @returns The response of the request made by the backend.
   *
   * @throws {InvalidDataError} If the user data does not follow a valid format
   * imposed by the IsFormat class.
   */
  async _actions(data, func_backend) {
    const resume = this.approve(data);

    if (resume.is_valid) {
      data = this.formatDict(data);
      return await func_backend(data);
    } else throw new InvalidDataError(resume.audit);
  }

  /**
   * Test if the user exist in the database.
   * @param {Object} user The user data.
   * @returns true if the user exist. Otherwise, return false.
   */
  async isExistingUser(user) {
    const get_back = this.backend.get;
    return (await this._actions(user, get_back.user.bind(get_back))) != null;
  }

  async isUserAdmin(id) {
    const resp = await this.backend.get.access(id);
    return resp != null && resp.access == "admin";
  }
}
