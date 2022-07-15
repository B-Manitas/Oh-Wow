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

  async service(data) {
    return await this.updateOne(
      SERVICE,
      { _id: data._id },
      { $set: { ...data } },
      true
    );
  }

  async salon(data) {
    await this.updateOne(SALON, { _id: data._id }, { $set: { ...data } }, true);
  }

  async app(data) {
    await this.updateOne(APP, { _id: data._id }, { $set: { ...data } }, true);
  }

  async staff(data) {
    return await this.updateOne(
      STAFF,
      { _id: data._id },
      { $set: { ...data } },
      true
    );
  }
}
