export default {
  _isSchema(data, schema) {
    return Object.keys(data) == Object.keys(schema);
  },

  isSchemaUser(data) {
    return this._isSchema(data, this.users());
  },

  login(mail = "", password = "") {
    return { mail, password };
  },

  users(
    firstname = "",
    lastname = "",
    mail = "",
    phone = "",
    status = "",
    birthdate = "",
    password = ""
  ) {
    return {
      firstname,
      lastname,
      mail,
      phone,
      birthdate,
      status,
      password,
    };
  },
};
