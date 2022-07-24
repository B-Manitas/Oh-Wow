import { Alert } from "react-native";
import { SuperController } from "./SuperController";
import { removeUserStore, defaultStatus } from "store/ActionsCreator";
import * as ImagePicker from "expo-image-picker";
import Catch from "exceptions/ErrorsCatcher";
import Utils from "model/Utils";
import PAGES from "../constants/PAGES";
import _ from "lodash";

export class Update extends SuperController {
  /**
   * Logs out the user
   * @param {Function} navigation The navigation function for changing page.
   */
  logout(navigation) {
    removeUserStore();
    defaultStatus();
    navigation.navigate(PAGES.HOME);
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
  async salon(salon, salonInit, setInitSalon, setAudit, setSave) {
    setSave(true);
    if (!_.isEqual(salonInit, salon)) {
      await this.frontend.update.salon(salon, setAudit);
      setInitSalon(salon);
      setAudit();
    }
    setSave(false);
  }

  @Catch
  async app(app) {
    await this.frontend.update.app(app);
  }
}
