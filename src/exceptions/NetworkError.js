export default class NetworkError extends Error {
  /**
   * Exception when network error is raised due to connection.
   * @param {Object} message The message of the error.
   */
  constructor(message) {
    super(message);
    this.name = "Network Error";
  }
}
