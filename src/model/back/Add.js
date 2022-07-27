// Super-class import
import { Request } from "./Request";

// Collection name import
import { ACCESS, APPT, SALON, SERVICE, USER } from "./Collection";

export class Add extends Request {
  /**
   * Send a request to register a new user.
   * @param {Object} user The user's data to register .
   * @returns {Number} The user's identifier after registration in the database.
   */
  async user(user) {
    return await this.insertOne(USER, user);
  }

  /**
   * Send request to insert new salon in the database.
   * @param {Object} salon The salon's data to insert in the database.
   * @returns The salon's ID inserted in the database.
   */
  async salon(salon) {
    return await this.insertOne(SALON, salon);
  }

  /**
   * Send request to insert new service in the database.
   * @param {Object} service The service's data to insert in the database.
   * @returns The service's ID inserted in the database.
   */

  async service(service) {
    return await this.insertOne(SERVICE, service);
  }

  /**
   * Send request to insert new appointment in the database.
   * @param {Object} appointment The appointment's data to insert in the database.
   * @returns The appointment's ID inserted in the database.
   */

  async appointment(appointment) {
    return await this.insertOne(APPT, appointment);
  }

  /**
   * Send request to password of user in the database.
   * @param {Object} access The access's data to insert in the database.
   * @returns The access's ID inserted in the database.
   */

  async access(access) {
    return await this.insertOne(ACCESS, access);
  }
}
