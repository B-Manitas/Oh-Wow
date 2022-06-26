import InvalidSchemaError from "../../Exceptions/InvalidSchemaError";
import { Auditor } from "./Auditor";

export class Approver extends Auditor {
  isApprovedAudit(audit) {
    return Object.keys(audit).every((val) => audit[val] == true);
  }

  approve(data) {
    let audit = this.audit(data);
    return { is_valid: this.isApprovedAudit(audit), audit };
  }

  approveSignup(data) {
    if (this.isSchemaUser(data)) throw new InvalidSchemaError(data);
    return this.approve(data);
  }
}
