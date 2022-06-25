export default {
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
