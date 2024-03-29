// Super-class import
import { Normalizer } from "./Normalizer";

// Other import
import _ from "lodash";
import CDate from "../utils/CDate";

/**
 * IsFormat class contains methods to test if value respects specific value
 * like date, password, mail...
 * @methods {@link isName}, {@link isDate}, {@link isPassword}, {@link isMail},
 * {@link isPhone}, {@link isAuthcode}, {@link isStatus}.
 */
export class IsFormat extends Normalizer {
  constructor() {
    super();

    this._FORMAT_AUTHCODE = /^[0-9]{6}$/;
    this._FORMAT_MAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    this._FORMAT_PHONE = /^([0-9]){2}( \d{2}){3,4}\s?$/;
    this._FORMAT_DATE = /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/;
    this._FORMAT_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    this._FORMAT_HOURS = /^(?:([01]?[0-9]|2[0-3])h)?(?:[0-5][0-9](?:min)?)?$/;
    this._FORMAT_MMDD = /^[0-3][0-9]\/[01][0-9]$/;
    this._FORMAT_FLOAT = /^-?[0-9]\d*(\.\d+)?$/;
    this._FORMAT_INT = /^[0-9]{1,}$/;
  }

  /**
   * Check wether the name meets the requirements of the format.
   * @param {String} name The name string.
   * @returns true if the name is not empty. Otherwise, return false.
   */
  isName(name) {
    return name.length > 1;
  }

  /**
   * Check wether the name meets the requirements of the format.
   * @param {String} date The date string.
   * @returns true if the date has the following format : YYYY-MM-DD. Otherwise, return false.
   */
  isDate(date) {
    return (
      this._FORMAT_DATE.test(date) &&
      CDate.isValid(new CDate(date)) &&
      CDate.isPast(new CDate(date))
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

  isDayOff(dayOff) {
    return (
      this.isSchema(dayOff, super.salon.day_off) &&
      Object.values(dayOff).every((val) => {
        return this.isBool(val);
      })
    );
  }

  isDateOff(date_off) {
    if (date_off == "") return true;
    else if (/[^0-9\/;]/.test(date_off)) return false;
    else {
      const audit_date = date_off.split(";").map((date) => {
        if (!this._FORMAT_MMDD.test(date)) return false;

        date = date.split("/");
        if (date.length != 2) return false;

        const [day, month, year] = [parseInt(date[0]), parseInt(date[1]), 2022];

        if (day <= 0 || month <= 0) return false;

        const nb_days = CDate.getMonthLength(year, month);
        if (day > nb_days) return false;
        else return true;
      });

      return audit_date.every((v) => v);
    }
  }

  isHours(hours) {
    return (
      (typeof hours === "number" && hours > 9) || this._FORMAT_HOURS.test(hours)
    );
  }

  isHoursOn(hoursOn) {
    // Check if hoursOn object contains only am_on, am_off, pm_on and pm_off key.
    if (!this.isSchema(hoursOn, super.salon.hours_on)) return false;

    const amOn = this.isHours(hoursOn.am_on);
    const amOff = this.isHours(hoursOn.am_off);
    const pmOn = this.isHours(hoursOn.pm_on);
    const pmOff = this.isHours(hoursOn.pm_off);

    // Check thath each hour has a good format.
    if (!amOn || !amOff || !pmOn || !pmOff)
      return { am_on: amOn, am_off: amOff, pm_on: pmOn, pm_off: pmOff };

    const minAMOn = CDate.timeToMinute(hoursOn.am_on);
    const minAMOff = CDate.timeToMinute(hoursOn.am_off);
    const minPMOn = CDate.timeToMinute(hoursOn.pm_on);
    const minPMOff = CDate.timeToMinute(hoursOn.pm_off);

    const am = minAMOn <= minAMOff;
    const amPM = minAMOff <= minPMOn;
    const pm = minPMOn <= minPMOff;

    // Check that opening hours are ealier than the closing hours.
    if (!am || !amPM || !pm)
      return {
        am_on: am,
        am_off: am && amPM,
        pm_on: pm && amPM,
        pm_off: pm,
      };

    // True if hours object is valid.
    return true;
  }

  isBool(bool) {
    return bool === true || bool === false;
  }

  isNumber(n) {
    return this._FORMAT_INT.test(n);
  }

  isFloat(x) {
    return this._FORMAT_FLOAT.test(x);
  }

  isCoord(x) {
    return this.isFloat(x) && -180 < parseFloat(x) && parseFloat(x) < 180;
  }

  isOffer(offer) {
    if (offer == null) return true;
    else if (!this.isSchema(offer, this.anonymous)) return false;
    else {
      const firstname = this.isName(offer.firstname);
      const lastname = this.isName(offer.lastname);
      const phone = this.isName(offer.phone);

      if (firstname && lastname && phone) return true;
      else return { firstname, lastname, phone };
    }
  }
}
