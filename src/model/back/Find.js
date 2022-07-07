import _ from "lodash";
import Utils from "../Utils";
import { STAFF, SALON, SERVICE, USER, ACCESS } from "./Collection";
import { Request } from "./Request";

export class Find extends Request {
  async allUsers() {
    return await this.find(USER, { projection: { status: 0, password: 0 } });
  }

  async allStaff() {
    return await this.find(STAFF);
  }

  async allServices() {
    return await this.find(SERVICE);
  }

  async allSalons() {
    return await this.find(SALON);
  }

  async allEmployed() {
    const resp = await this.aggregate(STAFF, [
      {
        $lookup: {
          from: USER,
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      { $match: { is_admin: false } },
    ]);

    return resp;
  }

  /**
   * Send a request to get the user's data for the login.
   * @param {Object} user The user's data to log.
   * @returns {Object} Object containing the user's ID and first name.
   */
  async user(user) {
    return await this.findOne(USER, { ...user });
  }

  async staff(id_user) {
    return await this.findOne(STAFF, { _id: id_user });
  }

  async connect(data) {
    const resp = await this.aggregate(USER, [
      { $match: { mail: data.mail } },
      {
        $lookup: {
          from: ACCESS,
          localField: "_id",
          foreignField: "_id",
          as: "connection",
        },
      },
      { $unwind: "$connection" },
      { $match: { "connection.password": data.password } },
    ]);

    if (resp.length == 1 && !_.isEmpty(resp))
      return Utils.removeKey(resp[0], "connection");
    else return null;
  }

  async salon(id) {
    return await this.findOne(SALON, { _id: id });
  }
}
