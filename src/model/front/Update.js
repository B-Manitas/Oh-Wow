import InexistingUserError from "exceptions/InexistingUserError";
import { SuperFrontend } from "./SuperFrontend";

export class Update extends SuperFrontend {
  /**
   * Send a request in the backend to update user data.
   * @param {Object} user The data entered by the user.
   */
  async user(user) {
    const update_back = this.backend.update;
    await this._actions(user, update_back.user.bind(update_back));
  }

  async salon(salon) {
    const update_back = this.backend.update;
    await this._actions(salon, update_back.salon.bind(update_back));
  }

  async service(service) {
    const update_back = this.backend.update;
    await this._actions(service, update_back.service.bind(update_back));
  }

  async access(id_user, access) {
    const is_existing_user = await this.isExistingUser({ _id: id_user });

    if (is_existing_user)
      await this.backend.update.access(this.schemaStaff(id_user, access));
    else throw new InexistingUserError();
  }
}
