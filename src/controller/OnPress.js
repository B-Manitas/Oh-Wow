import { SuperController } from "./SuperController";

import { updateService } from "store/ActionsCreator";
import Catch from "exceptions/ErrorsCatcher";
import _ from "lodash";
import { Alert, Linking } from "react-native";
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

  radioOffer(apt, setRadio, id) {
    const offer = id == 1 ? this.frontend.schemaAnonymous() : null;

    apt = { ...apt, offer };
    // setApt((p) => ({ ...p, offer }));
    setRadio(id);
  }

  @Catch
  async service(setSaving, data, data_init, setServiceInit, setAudit) {
    setSaving(true);
    if (!_.isEqual(data, data_init) && this.thisIsAdmin()) {
      await this.frontend.update.service(data, setAudit);
      updateService(data);
      setServiceInit(data);
      setAudit(this.frontend.fakeAudit(data));
    }
    setSaving(false);
  }

  @Catch
  async client(dataInit, data, setInit, setAudit, setSaving) {
    setSaving(true);
    if (!_.isEqual(data, dataInit) && this.thisIsAdmin()) {
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
      setAudit();
      setSaving(false);
    }
  }

  @Catch
  async link(url) {
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  }

  calendarDay(newDate, setDate, setShowingPanel) {
    setDate(newDate);
    setShowingPanel(true);
  }
}
