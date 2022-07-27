import { SuperController } from "./SuperController";

import {
  deleteService,
  removeUserStore,
  defaultStatus,
} from "store/ActionsCreator";

import { Alert } from "react-native";

import Catch from "exceptions/ErrorsCatcher";

import PAGES from "constants/PAGES";

export class Delete extends SuperController {
  /** Delete the connected user. */
  async thisUser(navigation, askConfirmation = true) {
    if (askConfirmation && !(await this.alertDelete("le compte"))) return;

    await this.frontend.delete.user(this.thisUserData._id);

    removeUserStore();
    defaultStatus();

    navigation.navigate(PAGES.HOME);
    Alert.alert("Votre compte a correctement été supprimé.");
  }

  /**
   * Delete user.
   * @param {Object} navigation The navigation object for changing page.
   * @param {String} userID The ID user to be deleted.
   */
  @Catch
  async user(navigation, userID) {
    if (!(await this.alertDelete("le compte"))) return;

    if (userID === this.thisUserData._id) this.thisUser(navigation, false);
    else {
      await this.frontend.delete.user(this.thisUserData._id);
      navigation.goBack();
    }
  }

  /**
   * Delete service.
   * @param {String} id The ID of the service to be deleted.
   * @param {Object} navigation The navigation object for changing page.
   */
  @Catch
  async service(id, navigation) {
    if (!(await this.alertDelete("le compte"))) return;

    await this.frontend.delete.service(id);
    deleteService(id);
    navigation.navigate(PAGES.HOME);
    Alert.alert("La prestation a correctement été supprimé.");
  }

  /**
   * Delete appoinment.
   * @param {String} id The ID of the appointment to be deleted.
   * @param {Function} setAptFilter The function to remove locally the appointment.
   */
  @Catch
  async appointment(id, setAptFilter) {
    if (!(await this.alertDelete("le rendez-vous"))) return;

    if (setAptFilter) setAptFilter((p) => p.filter((item) => item._id != id));
    await this.frontend.delete.appointment(id);
  }
}
