// Import react-native componnent
import { Alert } from "react-native";

// Super-class import
import { ErrorsCatcher } from "./ErrorsCatcher";

// Import redux componnent
import { addUserStore } from "../redux/ActionsCreator";

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
      Alert.alert("Welcome", `ID: ${user._id}`);
      addUserStore(user);
      navigation.navigate("Home");
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
      Alert.alert("Welcome Back", `ID: ${user._id}`);
      addUserStore(user);
      navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }
}
