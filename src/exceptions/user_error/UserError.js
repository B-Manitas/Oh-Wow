export default class UserError extends Error {
  constructor() {
    super();
    this.name = "User Error";
  }
}
