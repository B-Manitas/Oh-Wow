import { IsFormat } from "./IsFormat";

export class Auditor extends IsFormat {
  fakeAudit(data) {
    Object.keys(data).map((key) => (data[key] = true));
    return data;
  }

  auditKey(data, key) {
    switch (key) {
      case "firstname":
      case "lastname":
        return this.isName(data[key]);
      case "mail":
        return this.isMail(data[key]);
      case "phone":
        return this.isPhone(data[key]);
      case "birthdate":
        return this.isBirthdate(data[key]);
      case "password":
        return this.isPassword(data[key]);
      case "status":
        return this.isStatus(data[key]);
      default:
        return false;
    }
  }

  audit(data) {
    var report = {};
    Object.keys(data).map((key) => (report[key] = this.auditKey(data, key)));
    return report;
  }
}
