// Import react-native componnents
import { Alert } from "react-native";

// Import Custom Exceptions
import InvalidData from "exceptions/data_error/InvalidData";
import FailedLogin from "exceptions/data_error/FailedLogin";
import UnknowUser from "exceptions/user_error/UnknowUser";
import ExistingUser from "exceptions/user_error/ExistingUser";
import NetworkError from "exceptions/network_error/NetworkError";
import BadStatus from "exceptions/network_error/BadStatus";

/**
 * Capture errors before the user interface.
 * @methods {@link manageInvalidData}, {@link manageUserAlreadyExist}, {@link manageLogin}
 * , {@link manageNetwork}, {@link manageNetworkStatus}, {@link manageInvalidSchema}
 * , {@link manageInvalidSchema}, {@link manageDefault}, {@link manageAllErrors}.
 *
 * @public These are the public attributes of the class.
 * {@link error} The error catched.
 */
export default class ErrorHandler {
  constructor() {
    this.error = this.error;
  }

  /**
   * Catching the DataError.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   */
  manageInvalidData() {
    if (this.error.setAudit != undefined)
      this.error.setAudit((prev) => ({ ...prev, ...this.error.data }));
  }

  /** Catching the ExistingUser. */
  manageExistingUser() {
    Alert.alert(
      "User already exist",
      "A user with this e-mail address has already been registered."
    );
  }

  /** Catching the UnknowUser. */
  manageUnknowError() {
    Alert.alert(
      "Inexisting User",
      "The user is not yet registered in the database."
    );
  }

  /** Catching the FailedLogin. */
  manageFailedLogin() {
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
  manageBadStatus() {
    Alert.alert(
      "Network Status Error",
      `Please contact the developer for the error code 0-${this.error.status}`
    );
  }

  /** Catching the InvalidSchema. */
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
  manageAllErrors(error) {
    this.error = error;

    switch (true) {
      case this.error instanceof InvalidData:
        this.manageInvalidData();
        break;

      case this.error instanceof FailedLogin:
        this.manageFailedLogin();
        break;

      case this.error instanceof ExistingUser:
        this.manageExistingUser();
        break;

      case this.error instanceof BadStatus:
        this.manageBadStatus();
        break;

      case this.error instanceof NetworkError:
        this.manageNetwork();
        break;

      case this.error instanceof UnknowUser:
        this.manageUnknowError();
        break;

      default:
        this.manageDefault();
        break;
    }
  }
}
