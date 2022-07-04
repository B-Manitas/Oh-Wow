import DataError from "./DataError";

export default class FailedLogin extends DataError {
  constructor() {
    super();
    this.name = "Failed Login Error";
    this.message =
      "The connection failed due to an incorrect email or password.";
  }
}
