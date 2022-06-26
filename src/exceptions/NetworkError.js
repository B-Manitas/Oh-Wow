export default class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "Network Error";
  }
}
