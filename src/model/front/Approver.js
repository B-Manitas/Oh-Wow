// Super-class import
import { Auditor } from "./Auditor";

/**
 * The Approver class contains methods for approving an audit.
 * In other words, it allows you to test whether the data
 * respects the formats of the IsFormat class.

 * @methods {@link isApprovedAudit}, {@link approve}. 
 */
export class Approver extends Auditor {
  /**
   * Test if all value of dict are true.
   * @param {Object} audit The boolean object.
   * @returns true if all values of the dict are true.
   * Otherwise, return false.
   */
  isApprovedAudit(audit) {
    return Object.values(audit).every((val) =>
      typeof val === "object" ? this.isApprovedAudit(val) : audit[val] == true
    );
  }

  /**
   *
   * @param {Object} data
   * @returns An object with the following keys :
   * - 'is_valid' (bool): true if all values respects formats, false
   * otherwise.
   * - 'audit' (bool object): The audit object containing for each key a
   * true or false value, depending on whether the associated value respects
   * the formats.
   */
  approve(data) {
    let audit = this.audit(data);
    return { is_valid: this.isApprovedAudit(audit), audit };
  }
}
