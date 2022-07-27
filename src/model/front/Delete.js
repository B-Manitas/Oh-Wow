import { SuperFrontend } from "./SuperFrontend";

export class Delete extends SuperFrontend {
  /**
   * Delete user.
   * @param {String} id The ID user to be deleted.
   */
  async user(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.user.bind(delete_back));
  }

  /**
   * Delete service.
   * @param {String} id The ID of the service to be deleted.
   */
  async service(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.service.bind(delete_back));
  }

  /**
   * Delete staff.
   * @param {String} id The ID of the staff to be deleted.
   */
  async staff(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.staff.bind(delete_back));
  }

  /**
   * Delete salon.
   * @param {String} id The ID of the salon to be deleted.
   */
  async salon(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.salon.bind(delete_back));
  }

  /**
   * Delete appointment.
   * @param {String} id The ID of the appointment to be deleted.
   */
  async appointment(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.appointment.bind(delete_back));
  }
}
