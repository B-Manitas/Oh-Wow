import { SuperController } from "./SuperController";
import { addUserStore } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import PAGES from "../constants/PAGES";

export class Add extends SuperController {
  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   */
  @Catch
  async user(data, navigation, setAudit, setSend) {
    setSend(true);
    const user = await this.frontend.add.user(data, setAudit);
    addUserStore(user);

    navigation.navigate(PAGES.HOME);
    Alert.alert(`Welcome, ${user.firstname} !`);
  }

  service(navigation) {
    const data = this.frontend.schemaService();
    navigation.navigate(PAGES.SERVICE, { data, isNew: true });
  }

  @Catch
  async appointment(navigation, appointment, setAudit) {
    await this.frontend.add.appointment(appointment, setAudit);
    Alert.alert(`Your appointment has been validated.`);
    navigation.navigate(PAGES.HOME);
  }
}
