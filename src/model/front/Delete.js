import { SuperFrontend } from "./SuperFrontend";

export class Delete extends SuperFrontend {
  async user(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.user.bind(delete_back));
  }

  async service(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.service.bind(delete_back));
  }

  async staff(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.staff.bind(delete_back));
  }

  async staff(id) {
    const delete_back = this.backend.delete;
    await this._actions(id, delete_back.salon.bind(delete_back));
  }
}
