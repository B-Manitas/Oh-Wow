import NetworkError from "./NetworkError";

export default class NetworkStatusError extends NetworkError {
  constructor(status, message = "") {
    super(message);
    this.name = "Network Status Error";
    this.status = status;
  }
}
