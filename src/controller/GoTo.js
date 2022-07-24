import PAGES from "../constants/PAGES";
import { SuperController } from "./SuperController";

export class GoTo extends SuperController {
  searchToUser(nav, user) {
    nav.navigate(PAGES.CLIENT, { data: user });
  }

  nav(nav) {
    nav.navigate(PAGES.NAV);
  }

  services(nav) {
    nav.navigate(PAGES.CATALOGUE);
  }

  home(nav) {
    nav.navigate(PAGES.HOME);
  }

  contact(nav) {
    nav.navigate(PAGES.CONTACT);
  }

  settings(nav) {
    nav.navigate(PAGES.SETTINGS);
  }

  connection(nav) {
    nav.navigate(PAGES.CONNECTION);
  }

  planning(nav) {
    nav.navigate(PAGES.PLANNING);
  }

  appointments(nav) {
    nav.navigate(PAGES.APTS);
  }

  login(nav) {
    nav.navigate(PAGES.LOGIN);
  }

  signup(nav) {
    nav.navigate(PAGES.SIGNUP);
  }

  booking(nav, service) {
    if (this.this_is_connected) nav.navigate(PAGES.BOOKING, { data: service });
    else nav.navigate(PAGES.CONNECTION);
  }

  service(nav, service) {
    nav.navigate(PAGES.SERVICE, { service, isNew: false });
  }

  salons(nav) {
    nav.navigate(PAGES.SALONS);
  }

  search(nav) {
    nav.navigate(PAGES.SEARCH);
  }

  back(nav) {
    nav.goBack();
  }
}
