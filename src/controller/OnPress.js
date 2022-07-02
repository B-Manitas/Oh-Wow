// Super-class import
import { ControllerMain } from "./ControllerMain";

import { Alert } from "react-native";
import Utils from "../model/Utils";
import {
  addUserStore,
  gainAccess,
  removeUserStore,
} from "../redux/ActionsCreator";

export class OnPress extends ControllerMain {
  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async signup(data, hookFuncAudit, navigation) {
    try {
      const user = await this.frontend.signup(data);
      this.is_connected = true;

      addUserStore(Utils.removeKey(user, "status", "password"));

      navigation.navigate("Home");
      Alert.alert(`Welcome, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, hookFuncAudit);
    }
  }

  /**
   * Function to be called when the user has pressed the login button.
   * @param {Object} data The user's data to be checked in the database.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async login(data, hookFuncAudit, navigation) {
    try {
      const user = await this.frontend.login(data);
      this.is_connected = true;

      addUserStore(user);
      if (this.isAdmin()) gainAccess("admin");

      navigation.navigate("Home");
      Alert.alert(`Welcome back, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, hookFuncAudit);
    }
  }

  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    removeUserStore();
    this.is_connected = false;
    navigation.navigate("Home");
    Alert.alert(`Bye, see you soon !`);
  }

  addService(navigation) {
    const data = this.frontend.schemaService();
    return navigation.navigate("Service", { data });
  }
}
