import DataError from "./DataError";

export default class InvalidData extends DataError {
  /**
   * Exception when some data do not comply with the format requirements.
   * @param {Object} invalid_data Data that do not comply with the format requirements.
   */
  constructor(data, setAudit) {
    super();
    this.name = "Invalid Data Error";
    this.message =
      "The data does not meet the format requirements of the IsFormat class.";
    this.data = data;
    this.setAudit = setAudit;
  }
}
