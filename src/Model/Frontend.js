import InvalidDataError from "../Exceptions/InvalidDataError";
import UserAlreadyExist from "../Exceptions/UserAlreadyExist";
import Approver from "./Approver";
import Backend from "./Backend";

var backend = new Backend();

export default {
  async _actions(user, func_validation, func_backend) {
    const data = func_validation(user);

    if (data.is_valid) return await func_backend(user);
    else throw new InvalidDataError(data.audit);
  },

  async isExistingUser(user) {
    return (await this._actions(user, Approver.approve, backend.login.bind(backend))) != null;
  },

  async signup(user) {
    if (await this.isExistingUser({ mail: user["mail"] }))
      throw new UserAlreadyExist(user);

    return this._actions(user, Approver.approve, backend.signup);
  },

  async login(user) {
    return await this._actions(
      user,
      Approver.approve,
      Backend.login.bind(backend)
    );
  },
};
