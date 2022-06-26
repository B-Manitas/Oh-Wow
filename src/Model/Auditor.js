import IsFormat from "./IsFormat";

export default {
  fakeAudit(data) {
    Object.keys(data).map((key) => (data[key] = true));
    return data;
  },

  auditKey(data, key) {
    switch (key) {
      case "firstname":
      case "lastname":
        return IsFormat.isName(data[key]);
      case "mail":
        return IsFormat.isMail(data[key]);
      case "phone":
        return IsFormat.isPhone(data[key]);
      case "birthdate":
        return IsFormat.isBirthdate(data[key]);
      case "password":
        return IsFormat.isPassword(data[key]);
      case "status":
        return IsFormat.isStatus(data[key]);
      default:
        return false;
    }
  },

  audit(data) {
    var report = {};
    Object.keys(data).map((key) => (report[key] = this.auditKey(data, key)));
    return report;
  },
};
