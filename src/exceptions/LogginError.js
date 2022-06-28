export default class LogginError extends Error {
  constructor() {
    super();
    this.name = "LogginError";
  }
}
