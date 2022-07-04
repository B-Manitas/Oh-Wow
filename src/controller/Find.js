import { store } from "../redux/Store";
import { SuperController } from "./SuperController";
import { addUserStore, gainAccess } from "store/ActionsCreator";
import { Alert } from "react-native";
import Utils from "model/Utils";

export class Find extends SuperController {
  allServices(...funcs) {
    const data_store = store.getState().services;

    if (Utils.isEquals(data_store, [])) this.frontend.get.allServices(...funcs);
    else funcs.forEach((func) => func(data_store));
  }

  async allSalons(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data[0]));
  }

  allUsers(...funcs) {
    this.frontend.get.allUsers(...funcs);
  }

  async allUsersWithAccess(...funcs) {
    const user = await this.frontend.get.allUsers();
    const access = await this.frontend.get.allAccess();
    const data = user.map((item, i) => Object.assign({}, item, access[i]));
    funcs.forEach((func) => func(data));
  }

  /**
   * Function to be called when the user has pressed the login button.
   * @param {Object} data The user's data to be checked in the database.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async connect(data, hookFuncAudit, navigation) {
    try {
      const user = await this.frontend.get.connect(data);
      addUserStore(user);
      if (await this.frontend.get.isUserAdmin(user._id)) gainAccess("admin");

      navigation.navigate("Home");
      Alert.alert(`Welcome back, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, hookFuncAudit);
    }
  }
}
