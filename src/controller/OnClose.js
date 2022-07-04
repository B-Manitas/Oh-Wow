// Super-class import

import _ from "lodash";
import Utils from "model/Utils";
import { SuperController } from "./SuperController";

export class OnClose extends SuperController {
  async service(data, data_init, funcAudit, navigation) {
    try {
      if (!Utils.isEquals(data, data_init) && this.this_is_admin)
        await this.frontend.update.service(data);

      navigation.goBack();
    } catch (error) {
      this.manageAllErrors(error, funcAudit);
    }
  }

  async client(data, data_init, funcAudit, navigation) {
    try {
      if (!Utils.isEquals(data, data_init) && this.this_is_admin) {
        await this.frontend.update.user(Utils.removeKey(data, "access"));

        if (data.access == "admin")
          await this.frontend.update.access(data._id, "admin");
      }

      navigation.goBack();
    } catch (error) {
      this.manageAllErrors(funcAudit, funcAudit);
    }
  }

  async settingsApp(data, data_init, funcAudit, navigation) {
    try {
      if (!Utils.isEquals(data, data_init) && this.this_is_admin)
        await this.frontend.update.salon(data);

      navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, funcAudit);
    }
  }

  async settings(data, funcAudit, navigation) {
    try {
      if (!Utils.isEquals(data, this.this_user_data))
        await this.frontend.update.user(data);

      navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, funcAudit);
    }
  }
}
