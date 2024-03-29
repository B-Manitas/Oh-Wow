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
  async thisUser(navigation, askConfirmation = true, setRemoving) {
    if (askConfirmation && !(await this.alertDelete("le compte"))) return;
    if (setRemoving) setRemoving(true);

    await this.frontend.delete.user(this.thisUserData._id);

    removeUserStore();
    defaultStatus();

    navigation.navigate(PAGES.HOME);
    Alert.alert("Votre compte a été supprimé.");
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
      await this.frontend.delete.user(userID);
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
    Alert.alert("La prestation a été supprimé.");
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

  /**
   * Delete photo.
   * @param {String} id The ID of the photo to be deleted.
   * @param {Function} setAptFilter The function to remove locally the photo.
   * @param {Function} setZooming The function to reset the zoom value.
   * @param {Function} setSelected The function to reset the selected photo value.
   */
  @Catch
  async photo(id, setPhotos, setZooming, setSelected) {
    if (!(await this.alertDelete("la photo"))) return;

    await this.frontend.delete.photo(id);

    setPhotos((p) => p.filter((item) => item._id != id));
    setZooming();
    setSelected();
  }

  /**
   * Delete all data from the database.
   */
  @Catch
  async all(nav, setRemoving) {
    if (!(await this.alertDelete("la base de données"))) return;
    setRemoving(true);

    await this.frontend.delete.allUsers();
    await this.frontend.delete.allApp();
    await this.frontend.delete.allStaffs();
    await this.frontend.delete.allServices();
    await this.frontend.delete.allSalons();
    await this.frontend.delete.allAppointments();
    await this.frontend.delete.allAccess();
    await this.frontend.delete.allPhotos();

    removeUserStore();
    defaultStatus();
    nav.navigate(PAGES.HOME);
    Alert.alert("La base de données a été réinitialisée.");
  }
}
