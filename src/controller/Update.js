// React import
import { Alert } from "react-native";

// Super-class import
import { SuperController } from "./SuperController";

// Store import
import {
  addUserStore,
  removeUserStore,
  defaultStatus,
  updateStatus,
} from "store/ActionsCreator";

// Libraries import
import Catch from "exceptions/ErrorsCatcher";
import Utils from "model/utils/Utils";
import _ from "lodash";

// Constants import
import PAGES from "constants/PAGES";

export class Update extends SuperController {
  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    const firstname = this.thisUserData.firstname;
    removeUserStore();
    defaultStatus();
    navigation.navigate(PAGES.HOME);
    Alert.alert(`A bientôt ${firstname}...`);
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
  async client(setSaving, data, init, setData, setInit, setAudit) {
    if (!this.thisIsAdmin()) return;

    setSaving(true);

    // Check if the password must be updated.
    if (data.password != undefined) {
      const access = { _id: data._id, password: data.password };
      await this.frontend.update.access(access, setAudit);
    }

    // Remove password key
    data = Utils.removeKey(data, "password");

    // Check if user data must be updated.
    if (!_.isEqual(data, init)) {
      const user = Utils.removeKey(data, "is_admin", "id_salon");
      await this.frontend.update.user(user._id, setAudit);

      if (data.id_salon == null) await this.frontend.delete.staff(data._id);
      else if (data.id_salon != null || data.is_admin)
        await this.frontend.update.staff(
          data._id,
          data.id_salon,
          data.is_admin,
          setAudit
        );
    }

    setData(data);
    setInit(data);
    setAudit();
    setSaving(false);
  }

  /**
   * Logout the user if local access is different from that of the database.
   * Update the user data and access if connected.
   */
  async localUserData(setWaiting) {
    if (!this.thisIsConnected()) return;

    setWaiting(true);

    const userID = this.thisUserData._id;
    const userAccess = this.thisUserData.access;
    const DBAccess = await this.frontend.get.access(userID, userAccess);

    // Disconnect the user if password have changed.
    if (DBAccess == null) {
      removeUserStore();
      defaultStatus();
    } else {
      // Update user access.
      await this.frontend.get.status(userID, updateStatus);

      // Update user data.
      const userData = await this.frontend.get.user(userID);
      addUserStore({ ...userData, access: userAccess });
    }

    setWaiting(false);
  }
}
