import { Request } from "./Request";
import { SALON, SERVICE, USER } from "./Collection";

export class Delete extends Request {
  async user(user_id) {
    await this.deleteOne(USER, { _id: user_id });
  }

  async service(service_id) {
    await this.deleteOne(SERVICE, { _id: service_id });
  }

  async staff(id) {
    await this.deleteOne(SERVICE, { _id: id });
  }

  async salon(id) {
    await this.deleteOne(SALON, { _id: id });
  }
}
