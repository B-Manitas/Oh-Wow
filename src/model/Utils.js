import { ICON } from "../Constants/IMAGES";

export default {
  isPast(day) {
    return day < new Date().getDate();
  },

  isToday(day) {
    return day == new Date().getDate();
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
      lists[i + day] = { day: i + 1, is_available: Math.round(Math.random()) };
    }

    return lists;
  },

  onChangeCalendarPicker(month, year, cal) {
    () => month[1](month[0]);
    () => year[1](year[0]);
    () => cal[1](this.days(month[0], year[0]));
    console.log(month[0]);
  },
};
