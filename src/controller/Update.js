// React import
import { Alert } from "react-native";

// Super-class import
import { SuperController } from "./SuperController";

// Store import
import {
  addUserStore,
  removeUserStore,
  defaultStatus,
} from "store/ActionsCreator";

// Libraries import
import Catch from "exceptions/ErrorsCatcher";
import _ from "lodash";

// Constants import
import PAGES from "constants/PAGES";

export class Update extends SuperController {
  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    removeUserStore();
    defaultStatus();
    navigation.navigate(PAGES.HOME);
    Alert.alert(`Bye, see you soon !`);
  }

  /**
   * Function to be called when user update salon data.
   * @param {Function} setSaving Function to set true when saving data.
   * And set false at end.
   * @param {Object} data The salon data updated.
   * @param {Object} init The salon data not updated.
   * @param {Function} setInit Function to update the initialized data.
   * @param {Function} setAudit The hook function to be called when required
   * fields in the data are missing or have bad format.
   */
  @Catch
  async salon(setSaving, data, init, setInit, setAudit) {
    setSaving(true);

    if (!_.isEqual(init, data)) {
      await this.frontend.update.salon(data, setAudit);
      setInit(data);
      setAudit();
    }

    setSaving(false);
  }

  /**
   * Update the app data.
   * @param {Object} app The app data.
   */
  @Catch
  async app(app) {
    await this.frontend.update.app(app);
  }

  /**
   * Update the user data.
   * @param {Object} data
   * @param {Function} setAudit
   */
  @Catch
  async settings(data, setAudit) {
    if (!_.isEqual(data, this.thisUserData)) {
      await this.frontend.update.user(data, setAudit);
      addUserStore(data);
    }
  }

  /**
   * Function to be called when user update service data.
   * @param {Function} setSaving Function to set true when saving data.
   * And set false at end.
   * @param {Object} data The service data updated.
   * @param {Object} init The service data not updated.
   * @param {Function} setInit Function to update the initialized data.
   * @param {Function} setAudit The hook function to be called when required
   * fields in the data are missing or have bad format.
   */
  @Catch
  async service(setSaving, data, init, setInit, setAudit) {
    setSaving(true);
    if (!_.isEqual(data, init) && this.thisIsAdmin()) {
      await this.frontend.update.service(data, setAudit);
      updateService(data);
      setInit(data);
      setAudit();
    }
    setSaving(false);
  }

  /**
   * Function to be called when user update service data.
   * @param {Function} setSaving Function to set true when saving data.
   * And set false at end.
   * @param {Object} data The service data updated.
   * @param {Object} init The service data not updated.
   * @param {Function} setServiceInit Function to update the initialized data.
   * @param {Function} setAudit The hook function to be called when required
   * fields in the data are missing or have bad format.
   */
  @Catch
  async client(setSaving, data, init, setInit, setAudit) {
    setSaving(true);
    if (!_.isEqual(data, init) && this.thisIsAdmin()) {
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
}
