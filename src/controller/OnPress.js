import { SuperController } from "./SuperController";

import { updateService } from "store/ActionsCreator";
import Catch from "exceptions/ErrorsCatcher";
import _ from "lodash";
import { Alert } from "react-native";
import Utils from "model/Utils";

export class OnPress extends SuperController {
  aptDay(setApt, setDate, date) {
    setDate(date);
    setApt((p) => ({ ...p, date: date }));
  }

  aptStaff(setApt, id) {
    setApt((p) => ({ ...p, id_staff: id }));
  }

  aptHours(setApt, hours, date) {
    setApt((p) => ({ ...p, date: date.setTime(hours) }));
  }

  radioOffer(setApt, setRadio, id) {
    const offer = id == 1 ? this.frontend.schemaAnonymous() : null;

    setApt((p) => ({ ...p, offer }));
    setRadio(id);
  }

  @Catch
  async service(data, data_init, setServiceInit, setAudit) {
    if (!_.isEqual(data, data_init) && this.this_is_admin) {
      await this.frontend.update.service(data, setAudit);
      updateService(data);
      setServiceInit(data);
      Alert.alert("Modification sauvegardées");
    }
  }

  @Catch
  async client(data, data_init, setInit, setAudit) {
    if (!_.isEqual(data, data_init) && this.this_is_admin) {
      const user = Utils.removeKey(data, "is_admin", "id_salon");
      await this.frontend.update.user(user, setAudit);

      if (data.id_salon == null) await this.frontend.delete.staff(data._id);
      else if (data.id_salon != null || data.is_admin)
        await this.frontend.update.staff(
          data._id,
          data.id_salon,
          data.is_admin
        );

      setInit(data);
      Alert.alert("Modification sauvegardées");
    }
  }
}
