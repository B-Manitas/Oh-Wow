// Libraries imports
import _ from "lodash";

// Constants imports
import { FR_DAYS } from "../constants/DAYS";
import { ICON } from "../constants/IMAGES";
import PAGES from "../constants/PAGES";

export default {
  headerType(type, nav) {
    if (type == "close")
      return { img: ICON.close, onPress: () => nav.popToTop() };
    else if (type == "back")
      return { img: ICON.back, onPress: () => nav.goBack() };
    else return { img: ICON.menu_bl, onPress: () => nav.navigate(PAGES.NAV) };
  },

  randomInt(max) {
    return Math.floor(Math.random() * max);
  },

  removeKey(object, ...keys) {
    object = this.copy(object);
    keys.map((key) => delete object[key]);
    return object;
  },

  isEquals(o1, o2) {
    return _.isEqual(o1, o2);
  },

  copy(object) {
    return JSON.parse(JSON.stringify(object));
  },

  openDaysText(days) {
    const keys = Object.keys(days);
    const schema = ["0", "1", "2", "3", "4", "5", "6"];
    if (!_.isEqual(schema, keys)) return { key: "", value: "" };

    const open = keys.filter((i) => days[i] === false);
    if (open.length == 7) return { key: "Ouvert", value: "tous les jours." };

    var fr_day = open.map((i) => FR_DAYS[i]);

    if (fr_day.length === 0) return { key: "Fermé", value: "tous les jours." };
    if (fr_day.length === 1)
      return { key: "Ouvert les", value: fr_day[0] + "." };

    var last_day = fr_day.pop();
    var text = fr_day.join(", ") + " et " + last_day + ".";
    return { key: "Ouvert les", value: text };
  },

  canBook(init, service, isNew) {
    return _.isEqual(service, init) && !isNew;
  },

  cleanUp(...funcs) {
    funcs.map((func) => func(undefined));
  },

  strStatus(isAdmin, isStaff) {
    if (isAdmin) return "ADMIN";
    else if (isStaff) return "EMPLOYE";
    else return "";
  },
};
