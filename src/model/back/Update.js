import { STAFF, SALON, SERVICE, USER, APP } from "./Collection";
import { Request } from "./Request";

export class Update extends Request {
  /**
   * Send a request to update the user's data.
   * @param {Object} user The user's data to update.
   */
  async user(user) {
    await this.updateOne(USER, { _id: user._id }, { $set: { ...user } });
  }

  /**
   * Send a request to update a service's data.
   * @param {Object} data The service's data to update.
   */
  async service(data) {
    return await this.updateOne(
      SERVICE,
      { _id: data._id },
      { $set: { ...data } },
      true
    );
  }

  /**
   * Send a request to update a salon's data.
   * @param {Object} data The salon's data to update.
   */
  async salon(data) {
    await this.updateOne(SALON, { _id: data._id }, { $set: { ...data } }, true);
  }

  /**
   * Send a request to update a app's data.
   * @param {Object} data The app's data to update.
   */
  async app(data) {
    await this.updateOne(APP, { _id: data._id }, { $set: { ...data } }, true);
  }

  /**
   * Send a request to update a staff's data.
   * @param {Object} data The staff's data to update.
   */
  async staff(data) {
    return await this.updateOne(
      STAFF,
      { _id: data._id },
      { $set: { ...data } },
      true
    );
  }
}
