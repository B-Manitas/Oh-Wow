import { SuperController } from "./SuperController";
import { addUserStore } from "store/ActionsCreator";
import Utils from "model/Utils";
import { Alert } from "react-native";
import { catchError } from "./ErrorsCatcher";

export class Add extends SuperController {
  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  async user(data, funcAudit, navigation) {
    try {
      const user = await this.frontend.add.user(data);
      addUserStore(Utils.removeKey(user, "status", "password"));

      navigation.navigate("Home");
      Alert.alert(`Welcome, ${user.firstname} !`);
    } catch (error) {
      this.manageAllErrors(error, funcAudit);
    }
  }

  service(navigation) {
    const data = this.frontend.schemaService();
    navigation.navigate("Service", { data });
  }
}
