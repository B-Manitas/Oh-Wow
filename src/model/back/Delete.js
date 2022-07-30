import { Request } from "./Request";
import {
  ACCESS,
  APP,
  APPT,
  PHOTO,
  SALON,
  SERVICE,
  STAFF,
  USER,
} from "./Collection";

export class Delete extends Request {
  /**
   * Delete user in the database.
   * @param {String} ID The user ID to be deleted.
   */
  async user(ID) {
    await this.deleteOne(USER, { _id: ID });
  }

  /**
   * Delete access in the database.
   * @param {String} ID The access ID to be deleted.
   */
  async access(ID) {
    await this.deleteOne(ACCESS, { _id: ID });
  }

  /**
   * Delete service in the database.
   * @param {String} ID The service ID to be deleted.
   */
  async service(ID) {
    await this.deleteOne(SERVICE, { _id: ID });
  }

  /**
   * Delete staff in the database.
   * @param {String} ID The staff ID to be deleted.
   */
  async staff(ID) {
    await this.deleteOne(STAFF, { _id: ID });
  }

  /**
   * Delete salon in the database.
   * @param {String} ID The salon ID to be deleted.
   */
  async salon(ID) {
    await this.deleteOne(SALON, { _id: ID });
  }

  /**
   * Delete photo in the database.
   * @param {String} ID The photo ID to be deleted.
   */
  async photo(ID) {
    await this.deleteOne(PHOTO, { _id: ID });
  }

  /**
   * Delete appointment in the database.
   * @param {String} ID The appointment ID to be deleted.
   */
  async appointment(ID) {
    await this.deleteOne(APPT, { _id: ID });
  }

  async allUserApts(ID) {
    await this.deleteMany(APPT, { $or: [{ id_user: ID }, { id_staff: ID }] });
  }

  async allServiceApts(ID) {
    await this.deleteMany(APPT, { id_service: ID });
  }

  async allUsers() {
    await this.deleteMany(USER);
  }

  async allApp() {
    await this.deleteMany(APP);
  }

  async allStaffs() {
    await this.deleteMany(STAFF);
  }

  async allServices() {
    await this.deleteMany(SERVICE);
  }

  async allSalons() {
    await this.deleteMany(SALON);
  }

  async allAppointments() {
    await this.deleteMany(APPT);
  }

  async allAccess() {
    await this.deleteMany(ACCESS);
  }

  async allPhotos() {
    await this.deleteMany(PHOTO);
  }
}
