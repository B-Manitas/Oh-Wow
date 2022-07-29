import UnknowUser from "exceptions/user_error/UnknowUser";
import { SuperFrontend } from "./SuperFrontend";

export class Update extends SuperFrontend {
  /**
   * Send a request in the backend to update user data.
   * @param {Object} user The data entered by the user.
   */
  async user(user, setAudit) {
    const updateBack = this.backend.update;
    await this._actions(user, updateBack.user.bind(updateBack), setAudit);
  }

  async app(app) {
    await this.backend.update.app(app);
  }

  async access(data, setAudit) {
    const updateBack = this.backend.update;
    await this._actions(data, updateBack.access.bind(updateBack), setAudit);
  }

  async salon(salon, setAudit) {
    const updateBack = this.backend.update;
    await this._actions(salon, updateBack.salon.bind(updateBack), setAudit);
  }

  async service(service, setAudit) {
    const updateBack = this.backend.update;
    return await this._actions(
      service,
      updateBack.service.bind(updateBack),
      setAudit
    );
  }

  async staff(data, setAudit) {
    const isExistingUser = await this.isExistingUser(data._id);

    if (isExistingUser) {
      // The data must match to the staff schema before being added to the database.
      if (!this.isSchema(data, super.staff()))
        data = super.staff(data._id, data.id_salon, data.is_admin);

      const updateBack = this.backend.update;
      await this._actions(data, updateBack.staff.bind(updateBack), setAudit);
    } else throw new UnknowUser(setAudit);
  }
}
