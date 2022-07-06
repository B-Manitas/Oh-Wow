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
    return await this.findOne(USER, { ...user });
  }
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
}
