import { SuperController } from "./SuperController";
import { removeUserStore, lossAccess } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";

export class Delete extends SuperController {
  async thisUser() {
    await this.user(this.this_user_data._id);
  }

  @Catch
  async user(navigation) {
    await this.frontend.delete.user(this.this_user_data._id);
    removeUserStore();
    lossAccess();
    navigation.navigate("Home");
    Alert.alert(`Your account has been successfully removed.`);
  }

  @Catch
  async service(id, navigation) {
    await this.frontend.delete.service(id);
    navigation.navigate("Home");
    Alert.alert(`The service has been successfully removed.`);
  }
}
