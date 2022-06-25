import { InvalidDataError } from "../Exceptions/InvalidDataError";
import { Auditor } from "./Auditor";
import { backend } from "./Backend";

class Frontend extends Auditor {
  signup(user) {
    const data = this.isValidSignupData(user);

    if (data.is_valid) return backend.signup(user);
    else throw new InvalidDataError(data.invalid_data);
  }
}

export const frontend = new Frontend();
