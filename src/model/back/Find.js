import _ from "lodash";
import Utils from "../utils/Utils";
import CDate from "../utils/CDate";
import {
  STAFF,
  SALON,
  SERVICE,
  USER,
  ACCESS,
  APPT,
  APP,
  PHOTO,
} from "./Collection";
import { Request } from "./Request";

export class Find extends Request {
  /**
   * Get all services stored in the database.
   * @returns a list of objects.
   */
  async allServices() {
    return await this.find(SERVICE);
  }

  /**
   * Get all salons stored in the database.
   * @returns a list of objects.
   */
  async allSalons() {
    return await this.find(SALON);
  }

  /**
   * Get all users stored in the database.
   * @returns a list of objects.
   */
  async allUsers() {
    return await this.find(USER, { projection: { status: 0, password: 0 } });
  }

  /**
   * Get all staff stored in the database.
   * @returns a list of objects.
   */
  async allStaffs() {
    return await this.find(STAFF);
  }

  /**
   * Get all employee stored in the database.
   * @returns a list of objects.
   */
  async allEmployee() {
    return await this.find(STAFF, { filter: { is_admin: false } });
  }

  /**
   * Get all photos stored from the database.
   * @returns a list of objects.
   */
  async allPhotos() {
    return await this.find(PHOTO);
  }

  /**
   * Get all services.
   * @param {Boolean} isAdmin If false, filtering hidden services.
   * Otherwise, return all services
   * @returns list of services.
   */
  async allServices(isAdmin = false) {
    const filter = !isAdmin ? { is_hidden: false } : {};
    return await this.find(SERVICE, { filter });
  }

  /**
   * Get all users who are employees stored in the database.
   * @returns a list of objects.
   */
  async allUserStaff() {
    return await this.aggregate(STAFF, [
      {
        $lookup: {
          from: USER,
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      { $match: { is_admin: false } },
      {
        $project: {
          id_salon: 1,
          firstname: "$user.firstname",
          lastname: "$user.lastname",
        },
      },
    ]);
  }

  /**
   * Get planning within date range.
   * @param {String} staffID The ID of the staff.
   * @param {Number} beginDate The begin date to filter appointments
   * @param {Number} endDate The end date to filter appointments
   * @returns a list of objects.
   */
  async planningStaffBetweenDates(staffID, beginDate, endDate) {
    const staff_match =
      staffID == 0
        ? { $match: { date: { $gte: beginDate, $lt: endDate } } }
        : {
            $match: {
              id_staff: staffID,
              date: { $gte: beginDate, $lt: endDate },
            },
          };

    return await this.aggregate(APPT, [
      staff_match,
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
      {
        $lookup: {
          from: USER,
          localField: "id_staff",
          foreignField: "_id",
          as: "staff",
        },
      },
      {
        $lookup: {
          from: SALON,
          localField: "id_salon",
          foreignField: "_id",
          as: "salon",
        },
      },
      { $unwind: "$service" },
      { $unwind: "$user" },
      { $unwind: "$staff" },
      { $unwind: "$salon" },
      {
        $project: {
          date: 1,
          offer: 1,
          comment: 1,
          service: "$service.name",
          duration: "$service.duration",
          firstname: "$user.firstname",
          lastname: "$user.lastname",
          phone: "$user.phone",
          salon: "$salon.name",
          price: "$service.price",
          staff: "$staff.firstname",
        },
      },
      { $sort: { date: 1 } },
    ]);
  }

  /**
   * Get app data stored in the database.
   * @returns app data.
   */
  async app() {
    return await this.findOne(APP, { _id: "0" });
  }

  /**
   * Get user data stored in the database.
   * @returns user data.
   */
  async user(ID) {
    return await this.findOne(USER, { _id: ID });
  }

  /**
   * Get staff stored in the database.
   * @param {String} ID The ID of the staff to find.
   * @returns the staff's object.
   */
  async staff(ID) {
    return await this.findOne(STAFF, { _id: ID });
  }

  /**
   * Send a request to get the user's data for the login.
   * @param {Object} user The user's data to log.
   * @returns {Object} Object containing the user's data. If not found return null.
   */
  async connect(user) {
    const resp = await this.aggregate(USER, [
      { $match: { phone: user.phone } },
      {
        $lookup: {
          from: ACCESS,
          localField: "_id",
          foreignField: "_id",
          as: "connection",
        },
      },
      { $unwind: "$connection" },
      { $match: { "connection.password": user.password } },
    ]);

    if (resp.length == 1 && !_.isEmpty(resp))
      return Utils.removeKey(resp[0], "connection");
    else return null;
  }

  /**
   * Get the id of the user.
   * @param {String} id The user ID.
   * @param {String} access The token accessof the user.
   * @returns id of the user if existing.
   */
  async access(id, access) {
    return await this.findOne(ACCESS, { _id: id, password: access });
  }

  /**
   * Get plannings of staff.
   * @param {String} staffID The ID of the salon to get plannings.
   * @returns a list of appointments.
   */
  async planningStaff(staffID) {
    return await this.aggregate(APPT, [
      { $match: { id_staff: staffID } },
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
  }

  /**
   * Get all upcoming or historic appointments of a user.
   * @param {String} userID The user ID.
   * @param {*} isHistoric If true get historic appointments. Otherwise get
   * upcomming appointments.
   * @returns a list of appointments.
   */
  async userApt(userID, isHistoric) {
    const date = isHistoric
      ? { $lt: new CDate().getTimestamp() }
      : { $gte: new CDate().getTimestamp() };

    return await this.aggregate(APPT, [
      { $match: { id_user: userID, date } },
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
          comment: 1,
          salon: "$salon.name",
          service: "$service.name",
          duration: "$service.duration",
          staff: "$staff.firstname",
          price: "$service.price",
        },
      },
      { $sort: { date: isHistoric ? -1 : 1 } },
    ]);
  }

  /**
   * Get all appointments of user.
   * @param {String} ID The user id.
   * @returns a list of appointments.
   */
  async userAllApts(ID) {
    return await this.aggregate(APPT, [
      { $match: { id_user: ID } },
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
          comment: 1,
          salon: "$salon.name",
          service: "$service.name",
          duration: "$service.duration",
          staff: "$staff.firstname",
        },
      },
      { $sort: { date: 1 } },
    ]);
  }

  /**
   * Get service to display in the home page.
   * @returns list of services.
   */
  async homeServices() {
    return await this.aggregate(SERVICE, [
      { $match: { is_trend: true, is_hidden: false } },
    ]);
  }
}
