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
        await this.frontend.update(user);
        addUserStore(user);
      }

      if (navigation) navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  isAdmin() {
    return store.getState().access.access == "admin";
  }

  async setAdmin() {
    try {
      const id = store.getState().user["_id"];
      await this.frontend.setAccess(id, "admin");
      gainAccess("admin");
      Alert.alert("Admin", "Your are now admin");
    } catch (error) {
      console.log(error);
      this.manageAllErrors(error);
    }
  }
}
