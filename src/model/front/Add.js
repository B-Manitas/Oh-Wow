import ExistingUser from "exceptions/user_error/ExistingUser";
import Utils from "../utils/Utils";
import { SuperFrontend } from "./SuperFrontend";

export class Add extends SuperFrontend {
  /**
   * Send a registration request in the backend for a new user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after registration.
   *
   * @throws {ExistingUser} If the user already is already registered
   * in the databse.
   */
  async user(data, setAudit) {
    this._approveData(data, setAudit);

    const isExistingUser = await this.isExistingUser({ phone: data.phone });
    if (isExistingUser) throw new ExistingUser(data);

    const addBack = this.backend.add;
    const user = Utils.removeKey(data, "password", "status");
    const id = await this._actions(user, addBack.user.bind(addBack));

    await this._actions(
      this.access(id, data.password),
      addBack.access.bind(addBack)
    );

    return { ...id, ...user };
  }

  /**
   * Add new salon in the database.
   * @param {Object} salon The object data to be added to the database.
   */
  async salon(salon) {
    const addBack = this.backend.add;
    await this._actions(salon, addBack.salon.bind(addBack));
  }

  /**
   * Add new appointment in the database.
   * @param {Object} appointment The object data to be added to the database.
   * @param {Function} setAudit The hook function to be called when required
   * fields in the data are missing or have bad format.
   */
  async appointment(appointment, setAudit) {
    const addBack = this.backend.add;
    await this._actions(
      appointment,
      addBack.appointment.bind(addBack),
      setAudit
    );
  }
}
