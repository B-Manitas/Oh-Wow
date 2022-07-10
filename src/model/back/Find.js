import _ from "lodash";
import Utils from "../Utils";
import CDate from "../utils/CDate";
import { STAFF, SALON, SERVICE, USER, ACCESS, APPT } from "./Collection";
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
      {
        $project: {
          id_salon: 1,
          firstname: "$user.firstname",
          lastname: "$user.lastname",
        },
      },
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

  async appointment(id_salon, id_staff) {
    const resp = await this.aggregate(APPT, [
      { $match: { id_staff, id_salon } },
      {
        $lookup: {
          from: SERVICE,
          localField: "id_service",
          foreignField: "_id",
          as: "service",
        },
      },
      { $unwind: "$service" },
      { $project: { _id: 0, date: 1, duration: "$service.duration" } },
    ]);

    return resp;
  }

  async allAppointments(id_staff, date_str, date_end) {
    const staff_mathch = id_staff
      ? { $match: { id_staff, date: { $gte: date_str, $lt: date_end } } }
      : { $match: { date: { $gte: date_str, $lt: date_end } } };

    return await this.aggregate(APPT, [
      staff_mathch,
      {
        $lookup: {
          from: SERVICE,
          localField: "id_service",
          foreignField: "_id",
          as: "service",
        },
      },
      {
        $lookup: {
          from: USER,
          localField: "id_user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$service" },
      { $unwind: "$user" },
    ]);
  }

  async aptUpcoming(id) {
    return await this.aggregate(APPT, [
      { $match: { id_user: id, date: { $gte: new CDate().getTimestamp() } } },
      {
        $lookup: {
          from: SALON,
          localField: "id_salon",
          foreignField: "_id",
          as: "salon",
        },
      },
      {
        $lookup: {
          from: SERVICE,
          localField: "id_service",
          foreignField: "_id",
          as: "service",
        },
      },
      {
        $lookup: {
          from: USER,
          localField: "id_staff",
          foreignField: "_id",
          as: "staff",
        },
      },
      { $unwind: "$salon" },
      { $unwind: "$staff" },
      { $unwind: "$service" },
      {
        $project: {
          date: 1,
          offer: 1,
          salon: "$salon.name",
          service: "$service.name",
          staff: "$staff.firstname",
        },
      },
    ]);
  }
}
