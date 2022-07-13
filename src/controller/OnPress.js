import { SuperController } from "./SuperController";

import { updateService } from "store/ActionsCreator";
import Catch from "exceptions/ErrorsCatcher";
import _ from "lodash";
import { Alert } from "react-native";

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
}
