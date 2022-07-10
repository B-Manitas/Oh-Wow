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
      const resp = await this.frontend.update.service(data, setAudit);

      if (resp?.upsertedId) addService(data);
    }

    navigation.goBack();
  }

  @Catch
  async client(data, data_init, navigation, setAudit) {
    if (!Utils.isEquals(data, data_init) && this.this_is_admin) {
      const user = Utils.removeKey(data, "is_admin", "id_salon");
      await this.frontend.update.user(user, setAudit);

      if (data.id_salon == null) await this.frontend.delete.staff(data._id);
      else if (data.id_salon != null || data.is_admin)
        await this.frontend.update.staff(
          data._id,
          data.id_salon,
          data.is_admin
        );
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
