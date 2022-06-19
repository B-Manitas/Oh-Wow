import { ICON } from "../Constants/IMAGES";

export default {
  isPast(date) {
    return date < new Date();
  },

  isToday(date) {
    return date.toDateString() == new Date().toDateString();
  },

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

  days(month, year) {
    let date = new Date(year, month, 0);
    let nb_day = date.getDate();
    let day = (((date.getDay() + 6) % 7) + 1) % 7;
    let lists = new Array(42).fill(0);

    for (let i = 0; i < nb_day; i++) {
      lists[i + day] = {
        date: new Date(year, month, i + 1),
        is_available: this.randomBool(),
      };
    }

    return lists;
  },

  dictState(value, setValue) {
    return { val: value, func: setValue };
  },

  onChangeCalendarPicker(month, year, cal) {
    month.func(month.val);
    year.func(year.val);
    cal.func(this.days(month.val, year.val));
  },

  hours(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let open = { morning: [8, 9, 10, 11], afternoon: [14, 15, 16, 17] };
    let morning = [];
    let afternoon = [];

    for (let i = 0; i < open["morning"].length; i++) {
      morning[i] = {
        date: new Date(year, month, day, open["morning"][i]),
        is_available: this.randomBool(),
      };
    }

    for (let i = 0; i < open["morning"].length; i++) {
      afternoon[i] = {
        date: new Date(year, month, day, open["afternoon"][i]),
        is_available: this.randomBool(),
      };
    }

    return { morning, afternoon };
  },
};
