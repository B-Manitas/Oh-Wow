// React import
import { Alert } from "react-native";

// Super-class import
import { SuperController } from "./SuperController";

// Librairies import
import _ from "lodash";
import Calendar from "model/utils/Calendar";
import CDate from "model/utils/CDate";

// Store import
import { addUserStore } from "store/ActionsCreator";

// Exception import
import Catch from "exceptions/ErrorsCatcher";

// Constant import
import PAGES from "constants/PAGES";
import { DAYS_MIN } from "constants/DAYS";

export class Add extends SuperController {
  /**
   * Function to be called when the user has pressed the registration button.
   * @param {Object} data The user's data to be stored in the database.
   * @param {Function} navigation The navigation function for changing page.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} setSend The hook function to set sending to true
   */
  @Catch
  async user(data, navigation, setAudit, setSend) {
    setSend(true);

    const user = await this.frontend.add.user(data, setAudit);
    addUserStore(user);

    setAudit();
    navigation.navigate(PAGES.HOME);
    Alert.alert(`Bienvenue, ${user.firstname}.`);
  }

  /**
   * Function to be called when the admin has pressed new service button.
   * @param {Function} navigation the navigation function for changing page.
   */
  service(navigation) {
    const data = this.frontend.service;
    navigation.navigate(PAGES.SERVICE, { data, isNew: true });
  }

  /**
   * Function to be called when the user has booked new appointment.
   * @param {Function} navigation the navigation function for changing page.
   * @param {Object} apt The appointment data to be stroed in the database.
   * @param {Function} hookFuncAudit The hook function to be called when required
   * fields in the user data are missing.
   */
  @Catch
  async appointment(navigation, apt, duration, setAudit, setSending) {
    setSending(true);

    const date = new CDate(apt.date);

    // Fetch data
    const salon = await this.frontend.get.salon(apt.id_salon);
    const staff = await this.frontend.get.staff(apt.id_staff);
    const planning = await this.frontend.get.planningStaffBetweenDates(
      apt.id_staff,
      date.copy().removeTime().getTimestamp(),
      date.tomorow().getTimestamp()
    );

    // Check for valid appointment
    const calendar = new Calendar();
    const isValidApt = calendar.isValidAppointment(
      date,
      planning,
      salon,
      staff,
      duration
    );

    if (isValidApt) {
      await this.frontend.add.appointment(apt, setAudit);
      Alert.alert(`Votre réservation a été validée.`);
      navigation.navigate(PAGES.HOME);
    } else setAudit({ error: { failedValid: true } });
  }

  @Catch
  async photo(newPhoto, setNewPhoto, setPhotos) {
    if (!newPhoto) return;

    newPhoto = this.frontend.photo(newPhoto.img);
    await this.frontend.add.photo(newPhoto);
    setPhotos((p) => [...p, newPhoto]);
    setNewPhoto();
  }
}
