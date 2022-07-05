// Super-class import

import _ from "lodash";
import Utils from "model/Utils";
import Catch from "exceptions/ErrorsCatcher";
import { SuperController } from "./SuperController";
import { addService } from "store/ActionsCreator";

export class OnClose extends SuperController {
  @Catch
  async service(data, data_init, navigation, setAudit) {
    if (!Utils.isEquals(data, data_init) && this.this_is_admin) {
      await this.frontend.update.service(data, setAudit);
      addService(data);
    }

    navigation.goBack();
  }

  @Catch
  async client(data, data_init, navigation, setAudit) {
    if (!Utils.isEquals(data, data_init) && this.this_is_admin) {
      await this.frontend.update.user(Utils.removeKey(data, "access"));

      if (data.access == "admin")
        await this.frontend.update.access(data._id, "admin", setAudit);
    }

    navigation.goBack();
  }

  @Catch
  async settingsApp(data, data_init, navigation, setAudit) {
    if (!Utils.isEquals(data, data_init) && this.this_is_admin)
      await this.frontend.update.salon(data, setAudit);

    navigation.navigate("Home");
  }

  @Catch
  async settings(data, navigation, setAudit) {
    if (!Utils.isEquals(data, this.this_user_data))
      await this.frontend.update.user(data, setAudit);

    navigation.navigate("Home");
  }
}
