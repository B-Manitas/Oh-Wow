import { Request } from "./Request";
import { SERVICE, USER } from "./Collection";

export class Delete extends Request {
  async user(user_id) {
    await this.deleteOne(USER, { _id: user_id });
  }

  async service(service_id) {
    await this.deleteOne(SERVICE, { _id: service_id });
  }
}
