import UserAlreadyExist from "exceptions/UserAlreadyExist";
import { SuperFrontend } from "./SuperFrontend";

export class Add extends SuperFrontend {
  /**
   * Send a registration request in the backend for a new user.
   * @param {Object} user The data entered by the user.
   * @returns The user's ID after registration.
   *
   * @throws {UserAlreadyExist} If the user already is already registered
   * in the databse.
   */
  async user(user) {
    const is_existing_user = await this.isExistingUser({
      mail: user.mail,
    });

    if (is_existing_user) throw new UserAlreadyExist(user);

    const add_back = this.backend.add;
    const id = await this._actions(user, add_back.user.bind(add_back));

    return { ...id, ...user };
  }

  async salon(salon) {
    const add_back = this.backend.add;
    await this._actions(salon, add_back.salon.bind(add_back));
  }
}
