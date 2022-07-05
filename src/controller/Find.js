import { store } from "../redux/Store";
import { SuperController } from "./SuperController";
import { addUserStore, gainAccess } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import Utils from "model/Utils";

export class Find extends SuperController {
  @Catch
  allServices(setIsRefreshing, ...funcs) {
    if (setIsRefreshing) setIsRefreshing(true);
    const data_store = store.getState().services;

    if (Utils.isEquals(data_store, [])) this.frontend.get.allServices(...funcs);
    else funcs.forEach((func) => func(data_store));

    if (setIsRefreshing) setIsRefreshing(false);
  }

  @Catch
  async allSalons(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data[0]));
  }

  @Catch
  allUsers(...funcs) {
    this.frontend.get.allUsers(...funcs);
  }

  @Catch
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
  @Catch
  async connect(data, navigation, setAudit) {
    const user = await this.frontend.get.connect(data, setAudit);
    addUserStore(user);

    if (await this.frontend.get.isUserAdmin(user._id)) gainAccess("admin");

    navigation.navigate("Home");
    Alert.alert(`Welcome back, ${user.firstname} !`);
  }
}
