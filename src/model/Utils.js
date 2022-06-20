import { ICON } from "../Constants/IMAGES";

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

  randomBool() {
    return Math.round(Math.random());
  },

  dictState(value, setValue) {
    return { val: value, func: setValue };
  },
};
