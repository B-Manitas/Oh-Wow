import DataError from "./DataError";

export default class FailedLogin extends DataError {
  constructor(setAudit) {
    super();
    this.name = "Failed Login Error";
    this.message =
      "The connection failed due to an incorrect email or password.";
    this.setAudit = setAudit;
  }
}
