import { store } from "../redux/Store";
import { SuperController } from "./SuperController";
import { addUserStore, updateStatus } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import _ from "lodash";

export class Find extends SuperController {
  @Catch
  allServices(setIsRefreshing, ...funcs) {
    setIsRefreshing(true);
    this.frontend.get.allServices(...funcs);

    const data_store = store.getState().services;
    if (_.isEmpty(data_store)) this.frontend.get.allServices(...funcs);
    else funcs.forEach((func) => func(data_store));

    setTimeout(() => setIsRefreshing(false), 1000);
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
  app(...funcs) {
    this.frontend.get.app(...funcs);
  }

  @Catch
  allUsers(...funcs) {
    this.frontend.get.allUsers(...funcs);
  }

  @Catch
  async allUsersWithFunction(...funcs) {
    const user = await this.frontend.get.allUsers();
    const staff = await this.frontend.get.allStaff();

    const data = user.map((item) => {
      const access = staff.find((s) => s._id == item._id);
      if (access === undefined)
        return { ...item, id_salon: null, is_admin: false };
      else return { ...item, ...access };
    });

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
