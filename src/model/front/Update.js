import UnknowUser from "exceptions/user_error/UnknowUser";
import { SuperFrontend } from "./SuperFrontend";

export class Update extends SuperFrontend {
  /**
   * Send a request in the backend to update user data.
   * @param {Object} user The data entered by the user.
   */
  async user(user, setAudit) {
    const update_back = this.backend.update;
    await this._actions(user, update_back.user.bind(update_back), setAudit);
  }

  async salon(salon, setAudit) {
    const update_back = this.backend.update;
    await this._actions(salon, update_back.salon.bind(update_back), setAudit);
  }

  async service(service, setAudit) {
    const update_back = this.backend.update;
    await this._actions(service, update_back.service.bind(update_back), setAudit);
  }

  async access(id_user, access) {
    const is_existing_user = await this.isExistingUser({ _id: id_user });

    if (is_existing_user)
      await this.backend.update.access(this.schemaStaff(id_user, access));
    else throw new UnknowUser();
  }
}
