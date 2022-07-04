import UserError from "./UserError";

export default class UnknowUser extends UserError {
  constructor(data = {}) {
    super();
    this.name = "Unknow User Error";
    this.message = "The following user is unknow in the database.";
    this.data = data;
  }
}
