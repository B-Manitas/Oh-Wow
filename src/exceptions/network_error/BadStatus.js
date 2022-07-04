// Super-class import
import NetworkError from "./NetworkError";

export default class BadStatus extends NetworkError {
  /**
   * Exception when network status error is raised.
   * @param {Number} status The http code error.
   * @param {*} message The message of the error.
   */
  constructor(status) {
    super();
    this.name = "Bad Status Error";
    this.message = `The request has failed with the following status code : ${status}`;
    this.status = status;
  }
}
