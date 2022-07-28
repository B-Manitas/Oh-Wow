// Super-class import
import CDate from "../utils/CDate";
import { Schema } from "./Schema";

/**
 * The Normalizer class is used to format the data entered by the user before sending 
 * it to the database.

 * @methods {@link formatDefaultValue}, {@link formatDictByKey}, {@link formatDict}, 
 * {@link formatDefaultValue}, {@link formatLastname}, {@link formatFirstname}.
 */
export class Normalizer extends Schema {
  /**
   * Format general value.
   * @param {String} val The value to clean.
   * @returns The value in lowercase and without leading and ending white space.
   */
  defaultValue(value) {
    return value.toString().trim().toLowerCase();
  }

  /**
   * Format the value of dict.
   * @param {Object} dict The dictionnary to format.
   * @param {String} key The key of the value to format.
   * @returns The value formetted.
   */
  formatDictByKey(dict, key) {
    const value = dict[key];

    switch (key) {
      case "lastname":
        return this.lastname(value);

      case "firstname":
        return this.firstname(value);

      case "offer":
        return this.offer(value);

      case "duration":
        return this.time(value);

      case "hours_on":
        return this.hoursOn(value);

      case "day_off":
      case "is_opened":
      case "img":
      case "password":
      case "is_trend":
      case "is_hidden":
      case "name":
      case "date":
      case "description":
      case "address":
        return value;

      case "longitude":
      case "latitude":
        return this.float(value);

      case "price":
        return this.number(value);

      default:
        return this.defaultValue(dict[key]);
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
  lastname(lastname) {
    return lastname.trim().toUpperCase();
  }

  /**
   * Format firstname value.
   * @param {String} args The firstname value.
   * @returns The value in capitalize and without leading and ending white space.
   */
  firstname([first, ...rest]) {
    return [first.toUpperCase(), ...rest].join("").trim();
  }

  offer(offer) {
    if (offer == null) return null;
    else
      return {
        ...offer,
        firstname: this.firstname(offer.firstname),
        lastname: this.lastname(offer.lastname),
      };
  }

  time(time) {
    return CDate.timeToMinute(time);
  }

  hoursOn(hours) {
    Object.keys(hours).map((k) => (hours[k] = this.time(hours[k])));
    return hours;
  }

  number(value) {
    return parseInt(value);
  }

  float(value) {
    return parseFloat(value);
  }
}
