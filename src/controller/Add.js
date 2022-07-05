import { SuperController } from "./SuperController";
import { addUserStore } from "store/ActionsCreator";
import Utils from "model/Utils";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import { addService } from "store/ActionsCreator";

export class Add extends SuperController {
  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  @Catch
  async user(data, navigation, setAudit) {
    const user = await this.frontend.add.user(data, setAudit);
    addUserStore(Utils.removeKey(user, "status", "password"));

    navigation.navigate("Home");
    Alert.alert(`Welcome, ${user.firstname} !`);
  }

  service(navigation) {
    const data = this.frontend.schemaService();
    navigation.navigate("Service", { data });
  }
}
