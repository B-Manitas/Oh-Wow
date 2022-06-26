import Schema from "./Schema";
import InvalidSchemaError from "../Exceptions/InvalidSchemaError";
import Auditor from "./Auditor";

export default {
  isApprovedAudit(audit) {
    return Object.keys(audit).every((val) => audit[val] == true);
  },

  approve(data) {
    let audit = Auditor.audit(data);
    return {
      is_valid: Object.keys(audit).every((val) => audit[val] == true),
      audit,
    };
  },

  approveSignup(data) {
    if (Schema.isSchemaUser(data)) throw new InvalidSchemaError(data);
    return this.approve(data);
  },
};
