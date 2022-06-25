export class InvalidSchemaError extends Error {
  constructor(invalid_data = []) {
    super();
    this.name = "InvalidSchemaError";
    this.invalid_data = invalid_data;
  }
}
