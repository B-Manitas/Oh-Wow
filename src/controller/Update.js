import { Alert } from "react-native";
import { SuperController } from "./SuperController";
import { removeUserStore, defaultStatus } from "store/ActionsCreator";
import * as ImagePicker from "expo-image-picker";
import Catch from "exceptions/ErrorsCatcher";
import Utils from "model/Utils";

export class Update extends SuperController {
  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    removeUserStore();
    defaultStatus();
    navigation.navigate("Home");
    Alert.alert(`Bye, see you soon !`);
  }

  async image(func) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const base64 = "data:image/jpeg;base64,";
    if (!result.cancelled)
      return func((p) => ({ ...p, img: base64 + result.base64 }));
  }

  @Catch
  async salon(salon, salons_init, setSalonsInit, setAudit) {
    const id = salons_init.findIndex((item) => item._id === salon._id);

    if (!Utils.isEquals(salon, salons_init[id]))
      await this.frontend.update.salon(salon, setAudit);

    if (id == -1) setSalonsInit([...salons_init, salon]);
    else setSalonsInit((p) => p.map((item, i) => (id === i ? salon : item)));

    Alert.alert("Modifications sauvegardées");
  }

  @Catch
  async app(app) {
    await this.frontend.update.app(app)
  }
}
