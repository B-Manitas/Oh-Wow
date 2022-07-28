// Libraries import
import _ from "lodash";

/** The Schema class contains all the tables in the database. */
export class Schema {
  /**
   * Tests whether the object is a specified schema.
   * @param {Object} data The test object.
   * @param {Object} schema The schema to be compare.
   * @returns true if the keys of the object are equal to the keys of the schema.
   * Otherwise, return false.
   */
  isSchema(object, schema) {
    return _.isEqual(Object.keys(object).sort(), Object.keys(schema).sort());
  }

  /** Get the database login schema. */
  get login() {
    return { phone: "", password: "" };
  }

  /** Get the database user schema */
  get user() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
    };
  }

  /** Get the database salon schema. */
  get salon() {
    return {
      _id: Date.now().toString(),
      name: "",
      address: "",
      day_off: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
      hours_on: {
        am_on: 480,
        am_off: 720,
        pm_on: 780,
        pm_off: 1080,
      },
      date_off: "",
      is_opened: true,
      phone: "",
      longitude: 0,
      latitude: 0,
    };
  }

  /** Get the database service schema. */
  get service() {
    return {
      _id: Date.now().toString(),
      name: "",
      description: "",
      price: 0,
      duration: 0,
      is_trend: false,
      is_hidden: false,
      img: "data:image/jpg;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    };
  }

  /** Get the database anonymous user schema. */
  get anonymous() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
    };
  }

  /**
   * Get the database staff schema.
   * @param {String} _id The ID of the user to be staff.
   * @param {String} id_salon The ID of the salon where the user work.
   * @param {Boolean} is_admin True if user is admin. Otherwiser, false.
   * @returns The database staff schema.
   */
  staff(_id = "", id_salon = null, is_admin = false) {
    return {
      _id,
      id_salon,
      is_admin,
      date_off: "",
      day_off: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
    };
  }

  /**
   * The database appointment schema.
   * @param {String} id_user The ID of the user who booked new appointment.
   * @param {String} id_salon The ID of the salon where the user booked the appointment.
   * @param {String} id_service The ID of the service booked by the user.
   * @returns The database appointment schema.
   */
  appointment(id_user = "", id_salon = "", id_service = "") {
    return {
      _id: Date.now().toString(),
      id_user,
      offer: null,
      id_salon,
      id_service,
      id_staff: "",
      date: 0,
    };
  }

  /**
   * Get the database access schema.
   * @param {String} _id The ID of the user.
   * @param {String} password The password of the user.
   * @returns The database access schema.
   */
  access(_id = "", password = "") {
    return { _id, password };
  }
}
