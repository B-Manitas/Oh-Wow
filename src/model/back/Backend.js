// Super-class import
import { Request } from "./Request";

/**
 * The backend of the application.
 * @methods {@link signup}, {@link login}, {@link update}
 */
export class Backend extends Request {
  constructor() {
    super({
      url: "https://data.mongodb-api.com/app/data-qqvij/endpoint/data/v1/action",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "S1ZLMOyQchvTE2y86c9RvecDlLwqUn8zyAQScJa9WDSfdwutPjg0NDEyDPwWKcOZ",
      },
    });

    this._body = { dataSource: "DB", database: "DB" };
  }

  async _insertOne(collection, data = {}) {
    const document = { _id: Date.now().toString(), ...data };

    const resp = await this.post("/insertOne", {
      ...this._body,
      collection,
      document,
    });

    return resp["insertedId"];
  }

  async _findOne(collection, filter = {}, projection = {}) {
    const resp = await this.post("/findOne", {
      ...this._body,
      collection,
      filter,
      projection,
    });

    return resp["document"];
  }

  async _updateOne(collection, filter, update, upsert = false) {
    const resp = await this.post("/updateOne", {
      ...this._body,
      collection,
      filter,
      update,
      upsert,
    });

    if (upsert) return resp["insertedId"];
  }

  async _find(collection) {
    const resp = await this.post("/find", { ...this._body, collection });
    return resp["documents"];
  }

  async deleteOne(collection, filter) {
    await this.post("/deleteOne", { ...this._body, collection, filter });
  }

  /**
   * Send a request to register a new user.
   * @param {Object} user The user's data to register .
   * @returns {Number} The user's identifier after registration in the database.
   */
  async signup(user) {
    return await this._insertOne("user", user);
  }

  /**
   * Send a request to get the user's data for the login.
   * @param {Object} user The user's data to log.
   * @returns {Object} Object containing the user's ID and first name.
   */
  async login(user) {
    return this._findOne("user", { ...user }, { status: 0, password: 0 });
  }

  /**
   * Send a request to update the user's data.
   * @param {Object} user The user's data to update.
   */
  async updateUser(user) {
    await this._updateOne("user", { _id: user._id }, { $set: { ...user } });
  }

  async getAllSalon() {
    return await this._find("salon");
  }

  async newSalon(salon) {
    return await this._insertOne("salon", salon);
  }

  async updateSalon(data) {
    await this._updateOne("salon", { _id: data._id }, { $set: { ...data } });
  }

  async staff(id_user) {
    return await this._findOne("staff", { _id: id_user });
  }

  async setAccess(data) {
    return await this._insertOne("staff", { _id: data.id, ...data });
  }

  async getAllServices() {
    return this._find("service");
  }

  async addService(service) {
    return await this._insertOne("service", service);
  }

  async updateService(data) {
    await this._updateOne(
      "service",
      { _id: data._id },
      { $set: { ...data } },
      true
    );
  }

  async deleteUser(user_id) {
    await this.deleteOne("user", { _id: user_id });
  }

  async deleteService(service_id) {
    await this.deleteOne("service", { _id: service_id });
  }

  async getAllUsers() {
    return this._find("user");
  }

  async getAllAccess() {
    return this._find("staff");
  }
}
