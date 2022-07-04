import ExistingUser from "exceptions/user_error/ExistingUser";
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
  async user(user, setAudit) {
    const is_existing_user = await this.isExistingUser(
      { mail: user.mail },
      setAudit
    );

    if (is_existing_user) throw new ExistingUser(user);
    const add_back = this.backend.add;
    const id = await this._actions(
      user,
      add_back.user.bind(add_back),
      setAudit
    );

    return { ...id, ...user };
  }

  async salon(salon) {
    const add_back = this.backend.add;
    await this._actions(salon, add_back.salon.bind(add_back));
  }
}
