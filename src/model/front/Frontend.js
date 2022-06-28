import InvalidDataError from "exceptions/InvalidDataError";
import LogginError from "exceptions/LogginError";
import UserAlreadyExist from "exceptions/UserAlreadyExist";

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
    const id = this._actions(user, this.backend.signup.bind(this.backend));
    return { ...id, ...user };
  }

  async login(user) {
    const resp = await this._actions(
      user,
      this.backend.login.bind(this.backend)
    );

    if (resp == null) throw new LogginError();
    else return resp;
  }

  async update(user) {
    await this._actions(user, this.backend.update.bind(this.backend));
  }
}
