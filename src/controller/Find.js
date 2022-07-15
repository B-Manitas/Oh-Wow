import { store } from "../redux/Store";
import { SuperController } from "./SuperController";
import { addUserStore, updateStatus } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import Utils from "model/Utils";

export class Find extends SuperController {
  @Catch
  allServices(setIsRefreshing, ...funcs) {
    if (setIsRefreshing) setIsRefreshing(true);
    // const data_store = store.getState().services;
    // if (Utils.isEquals(data_store, []))
    // else funcs.forEach((func) => func(data_store));
    this.frontend.get.allServices(...funcs);
    if (setIsRefreshing) setIsRefreshing(false);
  }

  @Catch
  async allSalons(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data));
  }

  @Catch
  async salon(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data[0]));
  }

  @Catch
  allUsers(...funcs) {
    this.frontend.get.allUsers(...funcs);
  }

  @Catch
  async allUsersWithFunction(...funcs) {
    const user = await this.frontend.get.allUsers();
    const staff = await this.frontend.get.allStaff();
    const data = user.map((item, i) => Object.assign({}, item, staff[i]));
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
    await this.frontend.get.status(user._id, updateStatus);

    navigation.navigate("Home");
    Alert.alert(`Welcome back, ${user.firstname} !`);
  }

  @Catch
  async allEmployed(...funcs) {
    await this.frontend.get.allEmployed(...funcs);
  }

  @Catch
  async appointment(id_salon, id_staff, ...funcs) {
    await this.frontend.get.appointment(id_salon, id_staff, ...funcs);
  }

  @Catch
  async plannings(id_staff, date_str, date_end, ...funcs) {
    await this.frontend.get.plannings(id_staff, date_str, date_end, ...funcs);
  }

  @Catch
  async userApt(id, is_historic, ...funcs) {
    await this.frontend.get.userApt(id, is_historic, ...funcs);
  }

  @Catch
  async userAllApts(id, ...funcs) {
    await this.frontend.get.userAllApts(id, ...funcs);
  }
}
