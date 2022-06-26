import InvalidDataError from "../Exceptions/InvalidDataError";
import UserAlreadyExist from "../Exceptions/UserAlreadyExist";

import { Approver } from "./Approver";

export class Frontend extends Approver {
  constructor(backend) {
    super();
    this.backend = backend;
  }

  async _actions(user, func_backend) {
    const data = this.approve(user);

    if (data.is_valid) {
      user = this.cleanDict(user);
      return await func_backend(user);
    } else throw new InvalidDataError(data.audit);
  }

  async isExistingUser(user) {
    return (
      (await this._actions(user, this.backend.login.bind(this.backend))) != null
    );
  }

  async signup(user) {
    const is_existing_user = await this.isExistingUser({ mail: user["mail"] });
    if (is_existing_user) throw new UserAlreadyExist(user);
    return this._actions(user, this.backend.signup.bind(this.backend));
  }

  async login(user) {
    return await this._actions(user, this.backend.login.bind(this.backend));
  }
}
