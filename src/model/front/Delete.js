import { SuperFrontend } from "./SuperFrontend";

export class Delete extends SuperFrontend {
  /**
   * Delete user.
   * @param {String} id The ID user to be deleted.
   */
  async user(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.staff.bind(deleteBack));
    await this._actions(id, deleteBack.access.bind(deleteBack));
    await this._actions(id, deleteBack.allUserApts.bind(deleteBack));
    await this._actions(id, deleteBack.user.bind(deleteBack));
  }

  /**
   * Delete service.
   * @param {String} id The ID of the service to be deleted.
   */
  async service(id) {
    await this.backend.delete.allServiceApts(id);
    await this.backend.delete.service(id);
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
   * Delete photo.
   * @param {String} id The ID of the photo to be deleted.
   */
  async photo(id) {
    const deleteBack = this.backend.delete;
    await this._actions(id, deleteBack.photo.bind(deleteBack));
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
