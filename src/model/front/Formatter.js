// Super-class import
import { Schema } from "./Schema";

/**
 * The Formatter class is used to format the data entered by the user before sending 
 * it to the database.

 * @methods {@link formatDefaultValue}, {@link formatDictByKey}, {@link formatDict}, 
 * {@link formatDefaultValue}, {@link formatLastname}, {@link formatFirstname}.
 */
export class Formatter extends Schema {
  /**
   * Format general value.
   * @param {String} val The value to clean.
   * @returns The value in lowercase and without leading and ending white space.
   */
  formatDefaultValue(value) {
    return value.toString().trim().toLowerCase();
  }

  /**
   * Format the value of dict.
   * @param {Object} dict The dictionnary to format.
   * @param {String} key The key of the value to format.
   * @returns The value formetted.
   */
  formatDictByKey(dict, key) {
    switch (key) {
      case "lastname":
        return this.formatLastname(dict[key]);
      case "firstname":
        return this.formatFirstname(dict[key]);
      case "password":
        return dict[key];
      default:
        return this.formatDefaultValue(dict[key]);
    }
  }

  /**
   * Format all keys of dict.
   * @param {Object} dict The dict to format.
   * @returns The dictionnary formatted.
   */
  formatDict(dict) {
    Object.keys(dict).map(
      (key) => (dict[key] = this.formatDictByKey(dict, key))
    );
    return dict;
  }

  /**
   * Format lastname value.
   * @param {String} lastname The lastname string.
   * @returns The value in uppercase and without leading and ending white space.
   */
  formatLastname(lastname) {
    return lastname.trim().toUpperCase();
  }

  /**
   * Format firstname value.
   * @param {String} args The firstname value.
   * @returns The value in capitalize and without leading and ending white space.
   */
  formatFirstname([first, ...rest]) {
    return [first.toUpperCase(), ...rest].join("").trim();
  }
}
