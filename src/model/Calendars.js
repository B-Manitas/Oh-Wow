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

  // Calcule le calendar pour un salon et un mois d'une année
  calendar(date, setDate, salon, dur) {
    if (!salon) return [];

    const am_opening_hours = salon.morning_opening_hours;
    const am_closing_hours = salon.morning_closing_hours;
    const pm_opening_hours = salon.afternoon_opening_hours;
    const pm_closing_hours = salon.afternoon_closing_hours;
    const is_opened = salon.is_opened;
    var set_first_date = true;

    const id_off = this.idDayOff(salon.day_off);
    const date_off = this.parseDateOff(salon.date_off);

    if (date === undefined) date = this.today();
    const month = date.getMonth();
    const year = date.getFullYear();
    const nb_day = this.numberOfDays(year, month + 1);
    const day = this.convertIdDay(new Date(year, month, 1).getDay());

    let calendar = new Array(42).fill(0);

    for (var d = 0; d < nb_day; d++) {
      const day_date = new Date(year, month, d + 1);
      const is_available =
        this.isAvailableDate(date_off, id_off, day_date) && is_opened;

      if (set_first_date && is_available) {
        set_first_date = false;
        setDate(day_date);
      }

      var am_hours = [];
      for (let t = am_opening_hours; t <= am_closing_hours - dur; t += dur) {
        am_hours.push({
          time: t,
          is_available: is_available && Utils.randomBool(),
        });
      }

      var pm_hours = [];
      for (let t = pm_opening_hours; t <= pm_closing_hours - dur; t += dur) {
        pm_hours.push({
          time: t,
          is_available: is_available && Utils.randomBool(),
        });
      }

      calendar[d + day] = {
        date: day_date,
        is_available_day: is_available,
        am_hours,
        pm_hours,
      };
    }

    return calendar;
  },

  isAvailableDate(date_off, day_off, date) {
    return (
      !this.isPast(date) &&
      !this.isDayOff(day_off, date.getDay()) &&
      !this.isDateOff(date_off, date)
    );
  },

  idDayOff(day_off) {
    return Object.keys(day_off).filter((k) => day_off[k]);
  },

  isDayOff(id_off, day) {
    return id_off.includes(this.convertIdDay(day).toString());
  },

  parseDateOff(date_off) {
    return date_off.split(";");
  },

  isDateOff(date_off, date) {
    return date_off.includes(this.shortDateFormat(date));
  },

  isZeroTime(date) {
    return (
      date instanceof Date &&
      date.getHours() == 0 &&
      date.getMinutes() == 0 &&
      date.getSeconds() == 0
    );
  },

  isEqualDate(d1, d2) {
    return (
      d1.getFullYear() == d2.getFullYear() &&
      d1.getMonth() == d2.getMonth() &&
      d1.getDate() == d2.getDate()
    );
  },

  setTime(date, time) {
    date = this.removeTime(date);
    date.setMinutes(time);
    return new Date(date);
  },

  timesFormat(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);

    return `${hours}h${minutes.toString().padStart(2, "0")}`;
  },

  timeOfDate(date) {
    date = new Date(date);
    return 60 * date.getHours() + date.getMinutes();
  },

  timeOfDateFormat(date) {
    return this.timesFormat(this.timeOfDate(date));
  },

  shortDateFormat(date) {
    date = new Date(date);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    return `${day}/${month}`;
  },

  getFirstDate(calendar) {
    return calendar?.find((day) => day?.is_available_day)?.date;
  },
};
