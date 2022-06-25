class Schema {
  isSchemaUser(data) {
    return Object.keys(data) == Object.keys(this.users());
  }

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
  }
}

export const schema = new Schema();
