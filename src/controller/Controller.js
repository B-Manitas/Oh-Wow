// Import react-native componnent
import { Alert } from "react-native";

// Super-class import
import { ErrorsCatcher } from "./ErrorsCatcher";

// Import redux componnent
import {
  addUserStore,
  gainAccess,
  removeUserStore,
} from "../redux/ActionsCreator";
import { store } from "../redux/Store";
import Utils from "../model/Utils";
import { isDeepStrictEqual } from "util";
import _ from "lodash";

/**
 * Manage the link between the application and the user.
 * @methods {@link signup}, {@link login}, {@link logout}, {@link onCloseSettings}.

 * @public These are the public attributes of the class.
 * - {@link backend} (Backend) The backend of the application. 
 * - {@link frontend} (Frontend) The frontend of the application 
 * - {@link is_connected} (Boolean) true if user is connected, otherwise false.
 * - {@link user_data} (Object) The state in the redux store of the user. 
 */
export class Controller extends ErrorsCatcher {
  /**
   * Manage the link between the application and the user.
   * @param {Backend} backend The backend of the application.
   * @param {Frontend} frontend The frontend of the application.
   */
  constructor(backend, frontend) {
    super();
    this.backend = backend;
    this.frontend = frontend;
    this.is_connected = false;
  }

  /** Get the user redux state. */
  get user_data() {
    if (this.is_connected) return store.getState().user;
    else return this.frontend.schemaUser;
  }

  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async signup(data, func, navigation) {
    try {
      const user = await this.frontend.signup(data);
      this.is_connected = true;

      addUserStore(Utils.removeKey(user, "status", "password"));

      navigation.navigate("Home");
      Alert.alert(`Welcome, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  /**
   * Function to be called when the user has pressed the login button.
   * @param {Object} data The user's data to be checked in the database.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async login(data, func, navigation) {
    try {
      const user = await this.frontend.login(data);
      this.is_connected = true;

      addUserStore(user);
      if (this.isAdmin()) gainAccess("admin");

      navigation.navigate("Home");
      Alert.alert(`Welcome back, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, func);
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

  async onCloseSettings(user, func, navigation) {
    try {
      if (this.is_connected && user != this.user_data) {
        await this.frontend.updateUser(user);
        addUserStore(user);
      }

      if (navigation) navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async onCloseSettingsApp(salon, init_salon, func, navigation) {
    try {
      if (salon != init_salon && this.isAdmin())
        await this.frontend.updateSalon(salon);

      if (navigation) navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async isAdmin() {
    return (
      this.user_data._id != undefined &&
      (await this.frontend.isAdmin(this.user_data._id))
    );
  }

  async setAdmin() {
    try {
      const id = store.getState().user["_id"];
      await this.frontend.setAccess(id, "admin");
      gainAccess("admin");
      Alert.alert("Admin", "Your are now admin");
    } catch (error) {
      this.manageAllErrors(error);
    }
  }

  async newSalon() {
    const data_salon = this.frontend.schemaSalon();
    await this.frontend.newSalon(data_salon);
  }

  async getSalon(funcs) {
    const data = await this.frontend.getSalonData();
    funcs.forEach((func) => func(data[0]));
  }

  async fetchAllServices(funcs) {
    const data = await this.frontend.getAllServices();
    funcs.forEach((func) => func(data));
  }

  getAllServices() {
    return store.getState().services;
  }

  async onCloseService(service, init_service, func, navigation) {
    try {
      const service_2 = Utils.removeKey(service, ["_id", "img"]);
      const init_service_2 = Utils.removeKey(init_service, ["_id", "img"]);

      console.log(this.user_data._id);
      if (!_.isEqual(service_2, init_service_2) && (await this.isAdmin()))
        await this.frontend.updateService(service);

      if (navigation) navigation.goBack();
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }
}
