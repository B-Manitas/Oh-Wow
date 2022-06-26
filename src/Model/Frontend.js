import InvalidDataError from "../Exceptions/InvalidDataError";
import UserAlreadyExist from "../Exceptions/UserAlreadyExist";
import Approver from "./Approver";
import Backend from "./Backend";
import Formatter from "./Formatter";

var backend = new Backend();

export default {
  async _actions(user, func_backend) {
    const data = Approver.approve(user);

    if (data.is_valid) {
      user = Formatter.cleanDict(user);
      return await func_backend(user);
    } else throw new InvalidDataError(data.audit);
  },

  async isExistingUser(user) {
    return (await this._actions(user, backend.login.bind(backend))) != null;
  },

  async signup(user) {
    if (await this.isExistingUser({ mail: user["mail"] }))
      throw new UserAlreadyExist(user);

    return this._actions(user, backend.signup.bind(backend));
  },

  async login(user) {
    return await this._actions(user, Backend.login.bind(backend));
  },
};
