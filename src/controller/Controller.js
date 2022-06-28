// Import react-native componnent
import { Alert } from "react-native";

// Super-class import
import { ErrorsCatcher } from "./ErrorsCatcher";

// Import redux componnent
import { addUserStore } from "../redux/ActionsCreator";
import { store } from "../redux/Store";

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
      addUserStore(user);
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
      Alert.alert(`Welcome back, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async _isConnected() {
    const user = store.getState().user;
    const log_info = { _id: user._id, password: user.password };
    this.is_connected = await this.frontend.isExistingUser(log_info);
  }
}
