// Super-class import
import { Formatter } from "./Formatter";

// Other import
import Calendars from "../Calendars";

/**
 * IsFormat class contains methods to test if value respects specific value
 * like date, password, mail...
 * @methods {@link isName}, {@link isDate}, {@link isPassword}, {@link isMail},
 * {@link isPhone}, {@link isAuthcode}, {@link isStatus}.
 */
export class IsFormat extends Formatter {
  constructor() {
    super();

    this._FORMAT_AUTHCODE = /^[0-9]{6}$/;
    this._FORMAT_MAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    this._FORMAT_PHONE = /^[0-9]{10}$/;
    this._FORMAT_BIRTHDATE = /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/;
    this._FORMAT_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  }

  /**
   * Check wether the name meets the requirements of the format.
   * @param {String} name The name string.
   * @returns true if the name is not empty. Otherwise, return false.
   */
  isName(name) {
    return name !== "";
  }

  /**
   * Check wether the name meets the requirements of the format.
   * @param {String} date The date string.
   * @returns true if the date has the following format : YYYY-MM-DD. Otherwise, return false.
   */
  isDate(date) {
    return (
      this._FORMAT_BIRTHDATE.test(date) &&
      Calendars.isValid(new Date(date)) &&
      Calendars.isPast(new Date(date))
    );
  }

  /**
   * Check whether the password meets the requirements of the format.
   * @param {String} password The string.
   * @returns true if and only if all the following conditions are met.
   * - The minimum length of the password is 8 characters.
   * - Contains at least one uppercase letter.
   * - Contains at least one lowercase letter.
   * - Contains at least one number.
   *
   * Otherwise return false.
   */
  isPassword(password) {
    return this._FORMAT_PASSWORD.test(password);
  }

  /**
   * Check whether the mail meets the requirements of the format.
   * @param {String} password The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains valid characters: digits, uppercase and lowercase english letter.
   * - Contains valid special characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~.
   * - Contains a single arobase characters.
   * - Don't contains double dot.
   * - The extension domain contain between 2 and 6 characters.
   * - Respect the following mail format: example@address.com
   *
   * Otherwise return false.
   */
  isMail(mail) {
    return this._FORMAT_MAIL.test(mail);
  }

  /**
   * Check whether the phone number meets the requirements of the format.
   * @param {String} phone The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains digits.
   * - The length of the phone number is 10.
   * - The length of the country calling code is between 2 and 3 digits.
   * - The country calling code start by plus (+) characters.
   *
   * Otherwise return false.
   */
  isPhone(phone) {
    return this._FORMAT_PHONE.test(phone);
  }

  /**
   * Check whether the authentication code meets the requirements of the format.
   * @param {String} authcode The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains digits.
   * - The length of the phone number is 6.
   *
   * Otherwise return false.
   */
  isAuthcode(authcode) {
    return this._FORMAT_AUTHCODE.test(authcode);
  }

  /**
   * Check whether the status meets the requirements of the format.
   * @param {String} status The status string.
   * @returns true if the status is 'valid' or 'pending'. Otherwise, return false.
   */
  isStatus(status) {
    return status === "valid" || status === "pending";
  }

  isAccess(access) {
    return access === "employee" || access === "admin";
  }
}
