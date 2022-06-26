export class Schema {
  _isSchema(data, schema) {
    return Object.keys(data) == Object.keys(schema);
  }

  isSchemaUser(data) {
    return this._isSchema(data, this.schemaUser());
  }

  schemaLogin(mail = "", password = "") {
    return { mail, password };
  }

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
}
