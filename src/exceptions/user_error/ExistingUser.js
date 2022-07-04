import UserError from "./UserError";

export default class ExistingUser extends UserError {
  /**
   * Exception when user is already register in the database.
   * @param {Object} user The existing user.
   */
  constructor(user = {}) {
    super();
    this.name = "Existing User Error";
    this.message = "The user is already register in the database.";
    this.user = user;
  }
}
