export default class InvalidDataError extends Error {
  /**
   * Exception when some data do not comply with the format requirements.
   * @param {Object} invalid_data Data that do not comply with the format requirements. 
   */
  constructor(invalid_data = []) {
    super();
    this.name = "InvalidDataError";
    this.invalid_data = invalid_data;
  }
}
