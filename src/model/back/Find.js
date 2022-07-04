import { ACCESS, SALON, SERVICE, USER } from "./Collection";
import { Request } from "./Request";

export class Find extends Request {
  async allUsers() {
    return await this.find(USER, { projection: { status: 0, password: 0 } });
  }

  async allAccess() {
    return await this.find(ACCESS);
  }

  async allServices() {
    return await this.find(SERVICE);
  }

  async allSalons() {
    return await this.find(SALON);
  }

  /**
   * Send a request to get the user's data for the login.
   * @param {Object} user The user's data to log.
   * @returns {Object} Object containing the user's ID and first name.
   */
  async user(user) {
    return await this.findOne(USER, { ...user }, { status: 0, password: 0 });
  }

  async access(id_user) {
    return await this.findOne(ACCESS, { _id: id_user });
  }
}
