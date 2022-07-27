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

  async staff(id_user, id_salon, is_admin, setAudit) {
    const isExistingUser = await this.isExistingUser(id_user);
    
    if (isExistingUser) {
      const staff = super.staff(id_user, id_salon, is_admin);
      await this.backend.update.staff(staff);
    } else throw new UnknowUser(setAudit);
  }
}
