// Super-class import
import { ControllerMain } from "./ControllerMain";

import _ from "lodash";
import Utils from "../model/Utils";

export class OnClose extends ControllerMain {
  async service(service, init_service, func, navigation) {
    try {
      if (!_.isEqual(service, init_service) && (await this.isAdmin()))
        await this.frontend.updateService(service);

      if (navigation) navigation.goBack();
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async client(data, data_init, func, navigation) {
    try {
      if (!_.isEqual(data, data_init) && (await this.isAdmin())) {
        await this.frontend.updateUser(Utils.removeKey(data, "access"));

        if (data.access == "admin")
          await this.frontend.setAccess(data["_id"], "admin");
      }

      if (navigation) navigation.goBack();
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async settingsApp(salon, init_salon, func, navigation) {
    try {
      if (salon != init_salon && this.isAdmin())
        await this.frontend.updateSalon(salon);

      if (navigation) navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }
}
