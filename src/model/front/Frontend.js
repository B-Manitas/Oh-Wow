// Super-class import
import { Approver } from "./Approver";

// Import Custom Exceptions
import InvalidDataError from "exceptions/InvalidDataError";
import LogginError from "exceptions/LogginError";
import UserAlreadyExist from "exceptions/UserAlreadyExist";
import InexistingUserError from "exceptions/InexistingUserError";

/**
 * The frontend of the application.
 * @methods {@link  isExistingUser}, {@link  signup}, {@link  login}, {@link  update}
 *
 * @public These are the public attributes of the class.
 * - {@link backend} (Backend) The backend of the application.
 */
export class Frontend extends Approver {
  constructor(backend) {
    super();
    this.backend = backend;
  }

  /**
   * To call a function in the backend.
   * @param {Object} user The data entered by the user.
   * @param {Function} func_backend The function to call in the backend.
   * @returns The response of the request made by the backend.
   *
   * @throws {InvalidDataError} If the user data does not follow a valid format
   * imposed by the IsFormat class.
   */
  async _actions(user, func_backend) {
    const data = this.approve(user);

    if (data.is_valid) {
      user = this.formatDict(user);
      return await func_backend(user);
    } else throw new InvalidDataError(data.audit);
  }

  /**
   * Test if the user exist in the database.
   * @param {Object} user The user data.
   * @returns true if the user exist. Otherwise, return false.
   */
  async isExistingUser(user) {
    return (
      (await this._actions(user, this.backend.login.bind(this.backend))) != null
    );
  }

  /**
   * Send a registration request in the backend for a new user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after registration.
   *
   * @throws {UserAlreadyExist} If the user already is already registered
   * in the databse.
   */
  async signup(user) {
    const is_existing_user = await this.isExistingUser({ mail: user["mail"] });
    if (is_existing_user) throw new UserAlreadyExist(user);
    const id = this._actions(user, this.backend.signup.bind(this.backend));
    return { ...id, ...user };
  }

  /**
   * Send a connection request in the backend for a user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after connection.
   *
   * @throws {LogginError} If the user has not yet been registered.
   */
  async login(user) {
    const resp = await this._actions(
      user,
      this.backend.login.bind(this.backend)
    );

    if (resp == null) throw new LogginError();
    else return resp;
  }

  /**
   * Send a request in the backend to update user data.
   * @param {Object} user The data entered by the user.
   */
  async update(user) {
    await this._actions(user, this.backend.update.bind(this.backend));
  }

  async isAdmin(id_user) {
    const resp = await this.backend.staff(id_user);
    return resp !== null && resp["access"] == "admin";
  }

  async setAccess(id_user, access) {
    const is_existing_user = await this.isExistingUser({ _id: id_user });
    if (is_existing_user)
      await this.backend.setAccess(this.schemaStaff(id_user, access));
    else throw new InexistingUserError();
  }
}
