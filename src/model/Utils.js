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

  days(month, year) {
    let date = new Date(year, month, 0);
    let nb_day = date.getDate();
    let day = (((date.getDay() + 6) % 7) + 1) % 7;
    let lists = new Array(42).fill(0);

    for (let i = 0; i < nb_day; i++) {
      lists[i + day] = {
        date: new Date(year, month, i + 1),
        is_available: Math.round(Math.random()),
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
};
