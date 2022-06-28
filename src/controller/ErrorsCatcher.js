// Import react-native componnents
import { Alert } from "react-native";

// Import Custom Exceptions
import InvalidDataError from "exceptions/InvalidDataError";
import UserAlreadyExist from "exceptions/UserAlreadyExist";
import LogginError from "exceptions/LogginError";
import NetworkError from "exceptions/NetworkError";
import NetworkStatusError from "exceptions/NetworkStatusError";
import InvalidSchemaError from "exceptions/InvalidSchemaError";

/**
 * Capture errors before the user interface.
 * @methods {@link manageInvalidData}, {@link manageUserAlreadyExist}, {@link manageLogin}
 * , {@link manageNetwork}, {@link manageNetworkStatus}, {@link manageInvalidSchema}
 * , {@link manageInvalidSchema}, {@link manageDefault}, {@link manageAllErrors}.
 * 
 * @public These are the public attributes of the class.
 * {@link error} The error catched.
 */
export class ErrorsCatcher {
  constructor() {
    this.error = undefined;
  }

  /**
   * Catching the InvalidDataError.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   */
  manageInvalidData(func) {
    func((prev) => ({ ...prev, ...this.error.invalid_data }));
  }

  /** Catching the UserAlreadyExist. */
  manageUserAlreadyExist() {
    Alert.alert(
      "User already exist",
      "A user with this e-mail address has already been registered."
    );
  }

  /** Catching the LogginError. */
  manageLogin() {
    Alert.alert(
      "The username or password is incorrect",
      "Please ensure that you have entered the correct information.."
    );
  }

  /** Catching the NetworkError. */
  manageNetwork() {
    Alert.alert(
      "Network Error",
      "Please make sure you are connected properly to the internet."
    );
  }

  /** Catching the NetworkStatuError. */
  manageNetworkStatus() {
    Alert.alert(
      "Network Status Error",
      `Please contact the developer for the error code 0-${this.error.status}`
    );
  }

  /** Catching the InvalidSchemaError. */
  manageInvalidSchema() {
    Alert.alert(
      "Invalid Data",
      `An error was occured, please try again later.\n${this.error.invalid_data}`,
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]
    );
  }

  /** Catching the Error. */
  manageDefault() {
    console.log(this.error);
    Alert.alert(
      "Error",
      `An error was occured, please try again later.\n${this.error}`
    );
  }

  /**
   *
   * @param {Any} error The error catched.
   * @param {Function} func_invalid_data The hook function to be called when required
   * fields in the user data are missing.
   */
  manageAllErrors(error, func_invalid_data) {
    this.error = error;

    switch (true) {
      case this.error instanceof InvalidDataError:
        this.manageInvalidData(func_invalid_data);
        break;

      case this.error instanceof UserAlreadyExist:
        this.manageUserAlreadyExist();
        break;

      case this.error instanceof LogginError:
        this.manageLogin();
        break;

      case this.error instanceof NetworkError:
        this.manageNetwork();
        break;

      case this.error instanceof NetworkStatusError:
        this.manageNetworkStatus();
        break;

      case this.error instanceof InvalidSchemaError:
        this.manageInvalidSchema();
        break;

      default:
        this.manageDefault();
        break;
    }
  }
}
