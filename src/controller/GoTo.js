import PAGES from "constants/PAGES";
import { SuperController } from "./SuperController";

export class GoTo extends SuperController {
  /**
   * Go to navigation page.
   * @param {Object} nav The navigation object for changing page.
   */
  nav(nav) {
    nav.navigate(PAGES.NAV);
  }

  /**
   * Go to catalogues page.
   * @param {Object} nav The navigation object for changing page.
   */

  services(nav) {
    nav.navigate(PAGES.CATALOGUE);
  }

  /**
   * Go to home page.
   * @param {Object} nav The navigation object for changing page.
   */
  home(nav) {
    nav.navigate(PAGES.HOME);
  }

  /**
   * Go to contact page.
   * @param {Object} nav The navigation object for changing page.
   */
  contact(nav) {
    nav.navigate(PAGES.CONTACT);
  }

  /**
   * Go to settings page.
   * @param {Object} nav The navigation object for changing page.
   */

  settings(nav) {
    nav.navigate(PAGES.SETTINGS);
  }

  /**
   * Go to connection page.
   * @param {Object} nav The navigation object for changing page.
   */

  connection(nav) {
    nav.navigate(PAGES.CONNECTION);
  }

  /**
   * Go to planning page.
   * @param {Object} nav The navigation object for changing page.
   */
  planning(nav) {
    nav.navigate(PAGES.PLANNING);
  }

  /**
   * Go to appointment page.
   * @param {Object} nav The navigation object for changing page.
   */

  appointments(nav) {
    nav.navigate(PAGES.APTS);
  }

  /**
   * Go to login page.
   * @param {Object} nav The navigation object for changing page.
   */
  login(nav) {
    nav.navigate(PAGES.LOGIN);
  }

  /**
   * Go to signup page.
   * @param {Object} nav The navigation object for changing page.
   */
  signup(nav) {
    nav.navigate(PAGES.SIGNUP);
  }

  /**
   * Go to salons page.
   * @param {Object} nav The navigation object for changing page.
   */
  salons(nav) {
    nav.navigate(PAGES.SALONS);
  }

  /**
   * Go to search page.
   * @param {Object} nav The navigation object for changing page.
   */
  search(nav) {
    nav.navigate(PAGES.SEARCH);
  }

  /**
   * Go to photo page.
   * @param {Object} nav The navigation object for changing page.
   */
  photo(nav) {
    nav.navigate(PAGES.PHOTO);
  }

  /**
   * Go to photo page.
   * @param {Object} nav The navigation object for changing page.
   */
  legal(nav) {
    nav.navigate(PAGES.LEGAL);
  }

  /**
   * Go to previous opened page.
   * @param {Object} nav The navigation object for changing page.
   */
  back(nav) {
    nav.goBack();
  }

  /**
   * Go to booking page.
   * @param {Object} nav The navigation object for changing page.
   * @param {Object} service The service data.
   */
  booking(nav, service) {
    if (this.thisIsConnected()) nav.navigate(PAGES.BOOKING, { data: service });
    else nav.navigate(PAGES.CONNECTION);
  }

  /**
   * Go to service page.
   * @param {Object} nav The navigation object for changing page.
   * @param {Object} data The service data.
   */
  service(nav, data) {
    nav.navigate(PAGES.SERVICE, { data, isNew: false });
  }

  /**
   * Go to service page.
   * @param {Object} nav The navigation object for changing page.
   * @param {Object} user The user data.
   */
  client(nav, user) {
    nav.navigate(PAGES.CLIENT, { data: user });
  }

  /**
   * Go to comfirmApt page.
   * @param {Object} nav The navigation object for changing page.
   * @param {Object} service The service data.
   * @param {Object} salon The salon data.
   * @param {Object} apt The apt data.
   */
  confirmApt(nav, service, salon, apt) {
    const data = {
      service,
      apt: { ...apt, date: apt.date ? apt.date.getTimestamp() : 0 },
      salon,
    };

    nav.navigate(PAGES.CONFIRM_APT, data);
  }
}
