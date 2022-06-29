export default class InexistingUserError extends Error {
  constructor() {
    super();
    this.name = "InexistingUserError";
  }
}
