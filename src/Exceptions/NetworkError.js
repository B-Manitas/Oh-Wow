export class NetworkError extends Error {
  constructor() {
    super();
    this.name = "NetworkError";
    this.message = "Network error";
  }
}
