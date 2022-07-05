import { Alert } from "react-native";
import { SuperController } from "./SuperController";
import { removeUserStore, lossAccess } from "store/ActionsCreator";
import * as ImagePicker from "expo-image-picker";

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
}