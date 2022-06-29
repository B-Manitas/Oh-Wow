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
    return Object.keys(object) == Object.keys(schema);
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
  schemaLogin(mail, password) {
    return { mail, password };
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
}
