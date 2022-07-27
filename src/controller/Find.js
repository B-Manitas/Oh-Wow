// Super-class import
import { SuperController } from "./SuperController";

// Store import
import { store } from "store/Store";
import { addUserStore, updateStatus } from "store/ActionsCreator";

// React import
import { Alert } from "react-native";

// Exception import
import Catch from "exceptions/ErrorsCatcher";

// Libraries import
import _ from "lodash";

// Constants import
import PAGES from "constants/PAGES";

export class Find extends SuperController {
  /**
   * Fetch all services in the database.
   * @param {Function} setRefresh The function to set the refresh state.
   * @param  {...Function} funcs The functions to set list of services.
   */
  @Catch
  allServices(setRefresh, ...funcs) {
    setRefresh(true);

    const isAdmin = this.thisIsAdmin();
    const data_store = store.getState().services;

    if (_.isEmpty(data_store)) this.frontend.get.allServices(isAdmin, ...funcs);
    else funcs.forEach((func) => func(data_store));

    setTimeout(() => setRefresh(false), 1000);
  }

  /**
   * Fetch all users in the database.
   * @param  {...Function} funcs The functions to set list of users.
   */
  @Catch
  allUsers(...funcs) {
    this.frontend.get.allUsers(...funcs);
  }

  /**
   * Fetch all appointments of a user.
   * @param {*} id The ID of the user.
   * @param  {...Function} funcs The functions to set list of user appointments.
   */
  @Catch
  async userAllApts(id, ...funcs) {
    await this.frontend.get.userAllApts(id, ...funcs);
  }

  /**
   * Fetch all salons in the database.
   * @param  {...Function} funcs The functions to set list of salons.
   */
  @Catch
  async allSalons(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data));
  }

  /**
   * Fetch the first salon in the database.
   * @param  {...Function} funcs The functions to set list of salons.
   */
  @Catch
  async salon(...funcs) {
    const data = await this.frontend.get.allSalons();
    funcs.forEach((func) => func(data[0]));
  }

  /**
   * Fetch the app data in the database.
   * @param  {...Function} funcs The functions to set app data.
   */
  @Catch
  app(...funcs) {
    this.frontend.get.app(...funcs);
  }

  /**
   * Fetch all user in the database with their privilege: ADMIN, STAFF, NO.
   * @param  {...any} funcs The functions to set users data.
   */
  @Catch
  async allUsersWithFunction(...funcs) {
    const user = await this.frontend.get.allUsers();
    const staff = await this.frontend.get.allStaff();

    const data = user.map((item) => {
      const access = staff.find((s) => s._id == item._id);
      if (access === undefined)
        return { ...item, id_salon: null, is_admin: false };
      else return { ...item, ...access };
    });

    funcs.forEach((func) => func(data));
  }

  /**
   * Fetch user staff with their user data in the database.
   * @param  {...any} funcs The functions to set all staffs.
   */
  @Catch
  async allUserStaff(...funcs) {
    await this.frontend.get.allUserStaff(...funcs);
  }

  /**
   * Function to be called when the user has pressed the login button.
   * @param {Object} data The user's data to be checked in the database.
   * @param {Function} func The hook function to be called when required
   * fields in the user data are missing.
   * @param {Function} navigation The navigation function for changing page.
   * @param {Function} setSend The function to set sending state.
   */
  @Catch
  async connect(data, navigation, setAudit, setSend) {
    setSend(true);

    const user = await this.frontend.get.connect(data, setAudit);
    addUserStore({ ...user, access: data.password });
    await this.frontend.get.status(user._id, updateStatus);

    navigation.navigate(PAGES.HOME);
    Alert.alert(`Welcome back, ${user.firstname} !`);
  }

  /**
   * Fetch plannings of state between a date range.
   * @param {String} staffID The ID of the staff.
   * @param {Number} beginDate The timestampf of the begin date.
   * @param {Number} endDate The timestampf of the end date.
   * @param  {...Function} funcs The functions to set list of appointments.
   */
  @Catch
  async plannings(staffID, beginDate, endDate, ...funcs) {
    await this.frontend.get.planningStaffBetweenDates(staffID, beginDate, endDate, ...funcs);
  }

  /**
   * Fetch plannings of a staff.
   * @param {String} staffID The ID of the staff.
   * @param  {...Function} funcs The functions to set list of appointments.
   */
  @Catch
  async planningStaff(staffID, ...funcs) {
    await this.frontend.get.planningStaff(staffID, ...funcs);
  }

  /**
   * Fetch service to display in the homepage.
   * @param {Function} setRefresh The function to set the refresh state.
   * @param  {...Function} funcs The functions to set list of home services.
   */
  @Catch
  async homeServices(setRefresh, ...funcs) {
    setRefresh(true);
    await this.frontend.get.homeServices(...funcs);
    setRefresh(false);
  }

  /**
   * Fetch all upcoming or historic appointments of a user.
   * @param {String} id The ID of the user.
   * @param {Boolean} isHistoric If true get historic appointments. Otherwise get
   * upcomming appointments.
   * @param  {...Function} funcs The functions to set list of user appointments.
   */
  @Catch
  async userApt(id, isHistoric, ...funcs) {
    await this.frontend.get.userApt(id, isHistoric, ...funcs);
  }
}
