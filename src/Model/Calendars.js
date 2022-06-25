import Utils from "./Utils";

export default {
  getISODateFormat(date) {
    month = date.getMonth() + 1;
    day = date.getDate();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return date.getFullYear() + "-" + month + "-" + day;
  },

  removeTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  },

  yesterday() {
    var date = this.today();
    date.setDate(date.getDate() - 1);
    return date;
  },

  today() {
    return this.removeTime(new Date());
  },

  tomorrow() {
    var date = this.today();
    date.setDate(date.getDate() + 1);
    return date;
  },

  ISOYesterday() {
    return this.getISODateFormat(this.yesterday());
  },

  ISOToday() {
    return this.getISODateFormat(this.today());
  },

  ISOTomorrow() {
    return this.getISODateFormat(this.tomorrow());
  },

  isValid(date) {
    return date.getTime() === date.getTime();
  },

  isPast(date) {
    return +this.removeTime(date) < +this.today();
  },

  isToday(date) {
    return +this.removeTime(date) == +this.today();
  },

  numberOfDays(year, month) {
    return new Date(year, month, 0).getDate();
  },

  convertIdDay(day) {
    return (day + 6) % 7;
  },

  calendar(year, month) {
    let nb_day = this.numberOfDays(year, month);
    let day = this.convertIdDay(new Date(year, month, 0).getDay());
    let lists = new Array(42).fill(0);
    for (var i = 0; i < nb_day; i++) {
      lists[i + day] = {
        date: new Date(year, month, i + 1),
        is_available: Utils.randomBool(),
      };
    }

    return lists;
  },

  onChangeCalendarPicker(month, year, cal) {
    month.func(month.val);
    year.func(year.val);
    cal.func(this.calendar(year.val, month.val));
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
        is_available: Utils.randomBool(),
      };
    }

    for (let i = 0; i < open["morning"].length; i++) {
      afternoon[i] = {
        date: new Date(year, month, day, open["afternoon"][i]),
        is_available: Utils.randomBool(),
      };
    }

    return { morning, afternoon };
  },
};
