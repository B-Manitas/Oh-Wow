import DataError from "./DataError";

export default class InvalidSchema extends DataError {
  /**
   * Exception when some data do not conform to the schema format.
   * @param {Object} invalid_data Data that do not conform to the schema format.
   */
  constructor(data = {}) {
    super();
    this.name = "Invalid Schema Error";
    this.message = "The keys of data don't match those the Schema class.";
    this.data = data;
  }
}
