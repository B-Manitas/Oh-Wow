import { Request } from "./Request";
import { APPT, SALON, SERVICE, USER } from "./Collection";

export class Delete extends Request {
  /**
   * Delete user in the database.
   * @param {String} ID The user ID to be deleted.
   */
  async user(ID) {
    await this.deleteOne(USER, { _id: ID });
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
    await this.deleteOne(SERVICE, { _id: ID });
  }

  /**
   * Delete salon in the database.
   * @param {String} ID The salon ID to be deleted.
   */
  async salon(ID) {
    await this.deleteOne(SALON, { _id: ID });
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
}
