import { InvalidSchemaError } from "../Exceptions/InvalidSchemaError";
import { IsFormat } from "./IsFormat";
import { schema } from "./Schema";

export class Auditor extends IsFormat {
  getInvalidKey(data) {
    var invalid_keys = [];
    Object.keys(data).map((k) => data[k] && invalid_keys.push(k));
    return invalid_keys;
  }

  fakeAudit(data) {
    Object.keys(data).map((key) => (data[key] = true));
    return data;
  }

  isApprovedAudit(audit) {
    return Object.keys(audit).every((val) => val == true);
  }

  auditSignupData(data) {
    return {
      firstname: this.isFirstname(data.firstname),
      lastname: this.isLastname(data.lastname),
      mail: this.isMail(data.mail),
      phone: this.isPhone(data.phone),
      birthdate: this.isBirthdate(data.birthdate),
    };
  }

  isValidSignupData(data) {
    if (schema.isSchemaUser(data)) throw new InvalidSchemaError(data);

    let audit = this.auditSignupData(data);
    return { is_valid: this.isApprovedAudit(audit), audit };
  }
}
