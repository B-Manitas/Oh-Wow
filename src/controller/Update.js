import { Alert } from "react-native";
import { SuperController } from "./SuperController";
import { removeUserStore, lossAccess } from "store/ActionsCreator";

export class Update extends SuperController {
  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    removeUserStore();
    lossAccess();
    navigation.navigate("Home");
    Alert.alert(`Bye, see you soon !`);
  }
}
