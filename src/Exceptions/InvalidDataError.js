export class InvalidDataError extends Error {
  constructor(invalid_data = []) {
    super();
    this.name = "InvalidDataError";
    this.invalid_data = invalid_data;
  }
}
