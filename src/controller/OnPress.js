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
    navigation.navigate("Home");
    Alert.alert(`Bye, see you soon !`);
  }

  async deleteUser() {
    await this.deleteCustomUser(this.user_data._id);
  }

  async deleteCustomUser(user_id) {
    await this.frontend.deleteUser(user_id);
    removeUserStore();
    navigation.navigate("Home");
    Alert.alert(`Your account has been successfully removed.`);
  }

  addService(navigation) {
    const data = this.frontend.schemaService();
    navigation.navigate("Service", { data });
  }

  async removeService(navigation, service_id) {
    await this.frontend.deleteService(service_id);
    navigation.navigate("Home");
    Alert.alert(`The service has been successfully removed.`);
  }

  userSearch(navigation, user) {
    navigation.navigate("Client", { data: user });
  }
}
