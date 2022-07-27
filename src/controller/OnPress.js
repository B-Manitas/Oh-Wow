// Super-class import
import { SuperController } from "./SuperController";

// Exception import
import Catch from "exceptions/ErrorsCatcher";

// Librairies import
import _ from "lodash";
import * as ImagePicker from "expo-image-picker";

// React import
import { Alert, Linking } from "react-native";
import Utils from "../model/utils/Utils";

export class OnPress extends SuperController {
  /**
   * On press day button in booking page.
   * @param {Function} setApt Function to set the appointment.
   * @param {Function} setDate Function to set the date.
   * @param {CDate} date The date pressed.
   */
  aptDay(setApt, setDate, date) {
    setDate(date);
    setApt((p) => ({ ...p, date: date }));
  }

  /**
   * On press hours button in booking page.
   * @param {Function} setApt Function to set the appointment.
   * @param {Number} hours The hours pressed.
   * @param {CDate} date The date of the appointment.
   */
  aptHours(setApt, hours, date) {
    setApt((p) => ({ ...p, date: date.setTime(hours) }));
  }

  /**
   * On press offer radio box in the comfirmApt page.
   * @param {Object} apt The appointment data
   * @param {Function} setSelectedView Function to set the selected offer view.
   * @param {Number} selectedView 1 if is offer, else 0.
   */
  offer(apt, setSelectedView, selectedView) {
    const offer = selectedView == 1 ? this.schema.anonymous : null;

    apt = { ...apt, offer };
    setSelectedView(selectedView);
  }

  /**
   * Open website.
   * @param {String} url The url of the link
   */
  @Catch
  async link(url) {
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  }

  /**
   * On press day button in the planning page.
   * @param {CDate} newDate The date pressed.
   * @param {Function} setDate The function to set new date.
   * @param {Function} setShowingPanel The function to show swipeable pannel.
   */
  planningDay(newDate, setDate, setShowingPanel) {
    setDate(newDate);
    setShowingPanel(true);
  }

  /**
   * Open dialog to choose new images.
   * @param {Function} func The function to called to set image.
   */
  async image(func) {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) return;
    
    if (!Utils.lessThan1MB(result.base64))
      Alert.alert("Erreur: L'image doit faire moins 1MB.");
    else {
      const base64 = "data:image/jpeg;base64,";
      func((p) => ({ ...p, img: base64 + result.base64 }));
    }
  }
}
