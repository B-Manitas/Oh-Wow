import { SuperFrontend } from "./SuperFrontend";

export class Delete extends SuperFrontend {
  /**
   * Delete user.
   * @param {String} id The ID user to be deleted.
   */
  async user(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.user.bind(deleteBack));
  }

  /**
   * Delete service.
   * @param {String} id The ID of the service to be deleted.
   */
  async service(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.service.bind(deleteBack));
  }

  /**
   * Delete staff.
   * @param {String} id The ID of the staff to be deleted.
   */
  async staff(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.staff.bind(deleteBack));
  }

  /**
   * Delete salon.
   * @param {String} id The ID of the salon to be deleted.
   */
  async salon(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.salon.bind(deleteBack));
  }

  /**
   * Delete appointment.
   * @param {String} id The ID of the appointment to be deleted.
   */
  async appointment(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.appointment.bind(deleteBack));
  }
}
