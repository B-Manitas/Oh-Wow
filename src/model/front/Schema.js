import Utils from "model/Utils";

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
    return Utils.isEquals(Object.keys(object), Object.keys(schema));
  }

  /**
   * Tests whether the object is a user schema.
   * @param {Object} data The test object
   * @returns true if the keys of the object are equal to the keys of the user schema.
   * Otherwise, return false.
   */
  isSchemaUser(data) {
    return this.isSchema(data, this.schemaUser());
  }

  /** Get the login schema. */
  schemaLogin() {
    return { mail: "", password: "" };
  }

  /** Get the user schema. */
  schemaUser() {
    return {
      firstname: "",
      lastname: "",
      mail: "",
      phone: "",
      password: "",
    };
  }

  schemaStaff(_id = "", id_salon = null, is_admin = false) {
    return { _id, id_salon, is_admin };
  }

  schemaSalon() {
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
      date_off: "",
      am_on: 480,
      am_off: 720,
      pm_on: 780,
      pm_off: 1080,
      is_opened: true,
      phone: "",
      longitude: 0,
      latitude: 0,
    };
  }

  schemaService() {
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

  schemaAnonymous() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
    };
  }

  schemaAppointment(id_user = "", id_salon = "", id_service = "") {
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

  schemaAccess(_id = "", password = "") {
    return { _id, password };
  }

  schemaApp() {
    return {
      _id: Date.now().toString(),
      img: "data:image/jpg;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    };
  }
}
