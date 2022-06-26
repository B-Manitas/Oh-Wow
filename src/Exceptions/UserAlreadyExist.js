export default class UserAlreadyExist extends Error {
  constructor(user) {
    super();
    this.name = "UserAlreadyExist";
    this.message = "The user is already register in database.";
    this.user = user;
  }
}
