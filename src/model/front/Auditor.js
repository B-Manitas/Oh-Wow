// Super-class import
import Utils from "model/Utils";
import { IsFormat } from "./IsFormat";

/**
 * The Auditor class is used to audit the data entered by the user. 
 * In other words, it is used to obtain a summary of each data key 
 * respecting or not the format imposed by the IsFormat class.

 * @methods {@link fakeAudit}, {@link auditKey}, {@link audit}.
 */
export class Auditor extends IsFormat {
  /**
   * Create an object with true values.
   * @param {Object} data The object to do a fake audit.
   * @returns An object whose data keys are associated with true values.
   */
  fakeAudit(data) {
    var audit = Utils.copy(data);
    Object.keys(audit).forEach((key) => (audit[key] = true));
    audit["all"] = true;
    return audit;
  }

  /**
   * Test if a key of dict repects the format of the IsFormat class.
   * @param {Object} data The object to audit.
   * @param {String} key The key of the value to audit.
   * @returns true if value respects the format of the IsFormat class.
   * Otherwise, return false.
   */
  auditKey(data, key) {
    const value = data[key];

    switch (key) {
      case "firstname":
      case "lastname":
      case "name":
      case "description":
        return this.isName(value);
      case "mail":
        return this.isMail(value);
      case "phone":
        return this.isPhone(value);
      case "birthdate":
        return this.isDate(value);
      case "password":
        return this.isPassword(value);
      case "status":
        return this.isStatus(value);
      case "day_off":
        return this.isDayOff(value);
      case "date_off":
        return this.isDateOff(value);
      case "am_on":
      case "am_off":
      case "pm_on":
      case "pm_off":
      case "duration":
        return this.isHours(value);
      case "is_opened":
      case "is_trend":
        return this.isBool(value);
      case "price":
        return this.isNumber(value);
      case "longitude":
      case "latitude":
        return this.isFloat(value);
      case "offer":
        return this.isOffer(value);
      default:
        return true;
    }
  }

  /**
   * Create a Boolean object to check if the values of the keys in the dict
   * respect the formats of the IsFormat class.
   * @param {Object} data The object to audit.
   * @returns The object where data keys are associated to true when the formats
   * are respected and false otherwise.
   */
  audit(data) {
    var report = {};
    Object.keys(data).map((key) => (report[key] = this.auditKey(data, key)));
    report["all"] = Object.values(report).every((o) => o === true);
    return report;
  }
}
