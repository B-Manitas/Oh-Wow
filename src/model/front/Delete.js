import { SuperFrontend } from "./SuperFrontend";

export class Delete extends SuperFrontend {
  /**
   * Delete user.
   * @param {String} id The ID user to be deleted.
   */
  async user(id) {
    await this.backend.delete.staff(id);
    await this.backend.delete.access(id);
    await this.backend.delete.allUserApts(id);
    await this.backend.delete.user(id);
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
    await this.backend.delete.staff(id);
  }

  /**
   * Delete photo.
   * @param {String} id The ID of the photo to be deleted.
   */
  async photo(id) {
    await this.backend.delete.photo(id);
  }

  /**
   * Delete salon.
   * @param {String} id The ID of the salon to be deleted.
   */
  async salon(id) {
    await this.backend.delete.salon(id);
  }

  /**
   * Delete appointment.
   * @param {String} id The ID of the appointment to be deleted.
   */
  async appointment(id) {
    await this.backend.delete.appointment(id);
  }

  async allUsers() {
    await this.backend.delete.allUsers();
  }

  async allApp() {
    await this.backend.delete.allApp();
  }

  async allStaffs() {
    await this.backend.delete.allStaffs();
  }

  async allServices() {
    await this.backend.delete.allServices();
  }

  async allSalons() {
    await this.backend.delete.allSalons();
  }

  async allAppointments() {
    await this.backend.delete.allAppointments();
  }

  async allAccess() {
    await this.backend.delete.allAccess();
  }

  async allPhotos() {
    await this.backend.delete.allPhotos();
  }
}
