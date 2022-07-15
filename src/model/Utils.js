import _ from "lodash";
import { DAYS, FR_DAYS } from "../constants/DAYS";
import { ICON } from "../constants/IMAGES";

export default {
  getIconHeaders(type) {
    switch (type) {
      case "menu":
        return ICON.menu;

      case "back":
        return ICON.back;

      default:
        return ICON.close;
    }
  },

  isNull(value) {
    return value === null || value === undefined;
  },

  randomBool() {
    return Math.random() < 0.5;
  },

  randomInt(max) {
    return Math.floor(Math.random() * max);
  },

  dictState(value, setValue) {
    return { val: value, func: setValue };
  },

  selectFuncHeader(navigation, type) {
    switch (type) {
      case "menu":
        navigation.navigate("Navigation");
        break;

      case "back":
        navigation.goBack();
        break;

      default:
        navigation.popToTop();
        break;
    }
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

  setValue(func, key, value) {
    func((p) => ({ ...p, [key]: value }));
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
};
