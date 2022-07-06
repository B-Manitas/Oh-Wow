import { SuperController } from "./SuperController";
import { removeUserStore, defaultStatus } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import { deleteService } from "../redux/ActionsCreator";

export class Delete extends SuperController {
  async thisUser() {
    await this.user(this.this_user_data._id);
  }

  @Catch
  async user(navigation) {
    await this.frontend.delete.user(this.this_user_data._id);
    removeUserStore();
    defaultStatus();
    navigation.navigate("Home");
    Alert.alert(`Your account has been successfully removed.`);
  }

  @Catch
  async service(id, navigation) {
    await this.frontend.delete.service(id);
    deleteService(id);
    navigation.navigate("AllServices");
    Alert.alert(`The service has been successfully removed.`);
  }
}
