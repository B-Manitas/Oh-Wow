import Utils from "../Utils";

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
    return Utils.isArrayEquals(Object.keys(object), Object.keys(schema));
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
      birthdate: "2000-01-01",
      status: "valid",
      password: "",
    };
  }

  schemaStaff(_id = "", access = "") {
    return { _id, access };
  }

  schemaSalon() {
    return {
      address: "",
      day_off: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      date_off: "",
      morning_opening_hours: "8h00",
      morning_closing_hours: "12h00",
      afternoon_opening_hours: "13h00",
      afternoon_closing_hours: "18h00",
      is_opened: true,
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
      img: "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=",
    };
  }
}
