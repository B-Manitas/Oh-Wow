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

  async app(app) {
    await this.backend.update.app(app);
  }

  async salon(salon, setAudit) {
    const update_back = this.backend.update;
    await this._actions(salon, update_back.salon.bind(update_back), setAudit);
  }

  async service(service, setAudit) {
    const update_back = this.backend.update;
    return await this._actions(
      service,
      update_back.service.bind(update_back),
      setAudit
    );
  }

  async staff(id_user, id_salon, is_admin) {
    const is_existing_user = await this.isExistingUser({ _id: id_user });

    if (is_existing_user) {
      const staff_schema = this.schemaStaff(id_user, id_salon, is_admin);
      await this.backend.update.staff(staff_schema);
    } else throw new UnknowUser();
  }
}
