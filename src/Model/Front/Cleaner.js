import { Schema } from "./Schema";

export class Cleaner extends Schema {
  cleanValue(val) {
    return val.trim().toLowerCase();
  }

  cleanDictByKey(dict, key) {
    switch (key) {
      case "lastname":
        return this.formattingLastname(dict[key]);
      case "firstname":
        return this.formattingFirstname(dict[key]);
      case "password":
        return dict[key];
      default:
        return this.cleanValue(dict[key]);
    }
  }

  cleanDict(dict) {
    Object.keys(dict).map(
      (key) => (dict[key] = this.cleanDictByKey(dict, key))
    );
    return dict;
  }

  formattingLastname(lastname) {
    return lastname.trim().toUpperCase();
  }

  formattingFirstname([first, ...rest]) {
    return [first.toUpperCase(), ...rest].join("").trim();
  }
}
