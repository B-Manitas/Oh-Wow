import _ from "lodash";
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
    return Math.round(Math.random());
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
    keys.forEach((key) => delete object[key]);
    return this.copy(object);
  },

  isEquals(o1, o2) {
    return _.isEqual(o1, o2);
  },

  copy(object) {
    return JSON.parse(JSON.stringify(object));
  },
};
