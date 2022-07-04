import { Request } from "./Request";
import { SALON, SERVICE, USER } from "./Collection";

export class Add extends Request {
  /**
   * Send a request to register a new user.
   * @param {Object} user The user's data to register .
   * @returns {Number} The user's identifier after registration in the database.
   */
  async user(user) {
    return await this.insertOne(USER, user);
  }

  async salon(salon) {
    return await this.insertOne(SALON, salon);
  }

  async service(service) {
    return await this.insertOne(SERVICE, service);
  }
}
