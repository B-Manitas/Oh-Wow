export default class UserAlreadyExist extends Error {
  /**
   * Exception when user is already register in the database.
   * @param {Object} user The existing user.
   */
  constructor(user) {
    super();
    this.name = "UserAlreadyExist";
    this.message = "The user is already register in database.";
    this.user = user;
  }
}
