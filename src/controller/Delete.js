import { SuperController } from "./SuperController";
import { removeUserStore, defaultStatus } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import { deleteService } from "store/ActionsCreator";
import PAGES from "constants/PAGES";

export class Delete extends SuperController {
  /** Delete the connected user. */
  async thisUser(navigation) {
    await this.frontend.delete.user(userID)(this.thisUserData._id);

    removeUserStore();
    defaultStatus();

    navigation.navigate(PAGES.HOME);
    Alert.alert(`Your account has been successfully removed.`);
  }

  /**
   * Delete user.
   * @param {Object} navigation The navigation object for changing page.
   * @param {String} userID The ID user to be deleted.
   */
  @Catch
  async user(navigation, userID) {
    if (userID === this.thisUserData._id) this.thisUser(navigation);
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
    await this.frontend.delete.service(id);
    deleteService(id);
    navigation.navigate(PAGES.HOME);
    Alert.alert(`The service has been successfully removed.`);
  }

  /**
   * Delete appoinment.
   * @param {String} id The ID of the appointment to be deleted.
   * @param {Function} setAptFilter The function to remove locally the appointment.
   */
  @Catch
  async appointment(id, setAptFilter) {
    if (setAptFilter) setAptFilter((p) => p.filter((item) => item._id != id));
    await this.frontend.delete.appointment(id);
  }
}
