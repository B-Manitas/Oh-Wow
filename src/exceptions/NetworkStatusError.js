// Super-class import
import NetworkError from "./NetworkError";

export default class NetworkStatusError extends NetworkError {
  /**
   * Exception when network status error is raised.
   * @param {Number} status The http code error.
   * @param {*} message The message of the error.
   */
  constructor(status, message = "") {
    super(message);
    this.name = "Network Status Error";
    this.status = status;
  }
}
