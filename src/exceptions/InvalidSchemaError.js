export default class InvalidSchemaError extends Error {
  /**
   * Exception when some data do not conform to the schema format.
   * @param {Object} invalid_data Data that do not conform to the schema format.
   */
  constructor(invalid_data = []) {
    super();
    this.name = "InvalidSchemaError";
    this.invalid_data = invalid_data;
  }
}
