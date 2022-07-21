// Super-class import
import { SuperController } from "./SuperController";

import _ from "lodash";
import Utils from "model/Utils";
import Catch from "exceptions/ErrorsCatcher";
import { updateService, addUserStore } from "store/ActionsCreator";
import PAGES from "../constants/PAGES";

export class OnClose extends SuperController {
  @Catch
  async service(data, data_init, navigation) {
    if (data.img != data_init.img && this.this_is_admin) {
      await this.frontend.update.service({ _id: data._id, img: data.img });

      updateService({ ...data_init, img: data.img });
    }

    navigation.goBack();
  }

  @Catch
  async settingsApp(data, data_init, navigation, setAudit) {
    if (!Utils.isEquals(data, data_init) && this.this_is_admin)
      await this.frontend.update.salon(data, setAudit);

    navigation.navigate(PAGES.HOME);
  }

  @Catch
  async settings(data, navigation, setAudit) {
    if (!Utils.isEquals(data, this.this_user_data)) {
      await this.frontend.update.user(data, setAudit);
      addUserStore(data);
    }

    navigation.navigate(PAGES.HOME);
  }
}
