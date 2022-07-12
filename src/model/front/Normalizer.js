// Super-class import
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
      case "am_on":
      case "am_off":
      case "pm_on":
      case "pm_off":
        return this.time(value);

      case "day_off":
      case "is_opened":
      case "img":
      case "password":
      case "is_trend":
      case "name":
      case "date":
      case "description":
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
        firstname: this.formatFirstname(offer.firstname),
        lastname: this.formatLastname(offer.lastname),
      };
  }

  time(time) {
    if (typeof time === "number") return time;

    time = time.replace(/[^h0-9]/g, "");
    const [minutes, hours] = time.split("h").reverse();
    return 60 * parseInt(hours || 0) + parseInt(minutes);
  }

  number(value) {
    return parseInt(value);
  }

  float(value) {
    return parseFloat(value);
  }
}
