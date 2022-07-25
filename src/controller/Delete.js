import { SuperController } from "./SuperController";
import { removeUserStore, defaultStatus } from "store/ActionsCreator";
import { Alert } from "react-native";
import Catch from "exceptions/ErrorsCatcher";
import { deleteService } from "../redux/ActionsCreator";
import PAGES from "../constants/PAGES";

export class Delete extends SuperController {
  async thisUser() {
    await this.user(this.this_user_data._id);
  }

  @Catch
  async user(navigation) {
    await this.frontend.delete.user(this.this_user_data._id);
    removeUserStore();
    defaultStatus();
    navigation.navigate(PAGES.HOME);
    Alert.alert(`Your account has been successfully removed.`);
  }

  @Catch
  async service(id, navigation) {
    await this.frontend.delete.service(id);
    deleteService(id);
    navigation.navigate(PAGES.HOME);
    Alert.alert(`The service has been successfully removed.`);
  }

  @Catch
  salon(salon, salons_init, setSalons, setSalonsInit, setSelect) {
    const id = salons_init.findIndex((item) => item._id === salon._id);

    if (id === -1) setSalons((p) => p.filter((s) => s._id !== salon._id));
    else {
      this.frontend.delete.salon(salon._id);
      setSalonsInit(salons_init.filter((s) => s._id !== salon._id));
    }

    setSelect(id > 0 ? id - 1 : 0);
  }

  @Catch
  async appointment(id, setAptFilter) {
    console.log("w");
    if (setAptFilter) setAptFilter((p) => p.filter((item) => item._id != id));
    await this.frontend.delete.appointment(id);
  }
}
