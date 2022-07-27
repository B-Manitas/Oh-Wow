import _ from "lodash";
import { Alert } from "react-native";
import { ADMIN, EMPLOYEE } from "src/UserStatus";

// Store import
import { store } from "store/Store";
import { STATE_USER } from "store/State";

export class SuperController {
  constructor(frontend) {
    this.frontend = frontend;
  }

  /** Get the user data in the redux state. */
  get thisUserData() {
    return store.getState().user;
  }

  /** Get the user status in the redux state. */
  get thisUserAccess() {
    if (this.thisIsConnected()) return store.getState().status;
    else return undefined;
  }

  /**
   * Check if current user is connected.
   * @returns true if current user is connected. Otherwise, return false.
   */
  thisIsConnected() {
    return (
      this.thisUserData != null && !_.isEqual(this.thisUserData, STATE_USER)
    );
  }

  /**
   * Check if current user is an employee.
   * @returns true if current user is an employee. Otherwise, return false.
   */
  thisIsStaff() {
    return this.thisIsConnected() && this.thisUserAccess.status == EMPLOYEE;
  }

  /**
   * Check if current user is an admin.
   * @returns true if current user is an admin. Otherwise, return false.
   */
  thisIsAdmin() {
    return this.thisIsConnected() && this.thisUserAccess.status == ADMIN;
  }

  async alertDelete(message) {
    return new Promise((resolve) => {
      Alert.alert(
        "Supprimer définitivement",
        `Êtes-vous sûr de vouloir supprimer ${message} ?`,
        [
          { text: "Annuler", style: "cancel", onPress: () => resolve(false) },
          {
            text: "Supprimer",
            style: "destructive",
            onPress: () => resolve(true),
          },
        ]
      );
    });
  }
}
