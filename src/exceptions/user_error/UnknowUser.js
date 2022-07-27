import UserError from "./UserError";

export default class UnknowUser extends UserError {
  constructor(setAudit = undefined, data = {}) {
    super();
    this.name = "Unknow User Error";
    this.message = "The following user is unknow in the database.";
    this.setAudit = setAudit;
    this.data = data;
  }
}
