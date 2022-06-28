// Import react-native componnent
import { Alert } from "react-native";

// Super-class import
import { ErrorsCatcher } from "./ErrorsCatcher";

// Import redux componnent
import { addUserStore, removeUserStore } from "../redux/ActionsCreator";
import { store } from "../redux/Store";
import Utils from "../model/Utils";

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
      addUserStore(user);
      this.is_connected = true;
      navigation.navigate("Home");
      console.log(user);
      Alert.alert(`Welcome back, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  logout(navigation) {
    removeUserStore();
    this.is_connected = false;
    navigation.navigate("Home");
    Alert.alert(`Bye, see you soon !`);
  }

  async onCloseSettings(user, func, navigation) {
    try {
      if (this.is_connected && user != this.user_data)
        await this.frontend.update(user);
      if (navigation) navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }
}
