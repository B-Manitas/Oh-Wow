export default {
  _isSchema(data, schema) {
    return Object.keys(data) == Object.keys(schema);
  },

  isSchemaUser(data) {
    return this._isSchema(data, this.user());
  },

  login(mail = "", password = "") {
    return { mail, password };
  },

  user() {
    return {
      firstname: "",
      lastname: "",
      mail: "",
      phone: "",
      birthdate: "2000-01-01",
      status: "valid",
      password: "",
    };
  },
};
