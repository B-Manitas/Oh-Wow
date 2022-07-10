import CDate from "./CDate";

export default class Calendar {
  #DAYS_MN = 1400;
  #is_first_date_on = true;
  #day_off;
  #date_off;
  #date;
  #days_list;
  #bookings;
  #salon;

  setDate(date) {
    if (!date) this.#date = CDate.today();
    else this.#date = date;
  }

  setDayOff(day_off) {
    this.#day_off = Object.keys(day_off).filter((k) => day_off[k]);
  }

  setDateOff(date_off) {
    this.#date_off = date_off.split(";");
  }

  setFirstDateOn(func, date) {
    if (!this.#is_first_date_on) return;

    this.#is_first_date_on = false;
    func(date);
  }

  initCalendars() {
    this.#days_list = new Array(42).fill(0);
  }

  isDateOn(date) {
    return (
      (!date.isPast() || (date.isPast() && date.isSameDate(CDate.today()))) &&
      !this.#day_off.includes(date.getDay().toString()) &&
      !this.#date_off.includes(date.toDateString(true))
    );
  }

  isHoursOn(date, time, dur) {
    if (date.copy().setTime(time).isPast()) return false;

    date = date.getTimestamp();
    const booking = this.#bookings.find(
      (b) => Math.abs(date - b.date) <= this.#DAYS_MN
    );

    if (!booking) return true;
    else {
      const min_apt = Math.abs(booking.date - date);
      return (
        (time < min_apt && time + dur < min_apt + booking.duration) ||
        (time > min_apt && time + dur > min_apt + booking.duration)
      );
    }
  }

  getHours(date, dur, time_on, time_off, is_date_on) {
    var h_list = [];

    for (let time = time_on; time <= time_off - dur; time += dur) {
      h_list.push({
        time,
        is_on: is_date_on && this.isHoursOn(date, time, dur),
      });
    }

    const is_on = !h_list.every((v) => v.is_on === false);
    return { hours: h_list, is_on };
  }

  getAMHours(date, dur, is_date_on) {
    return this.getHours(
      date,
      dur,
      this.#salon.am_on,
      this.#salon.am_off,
      is_date_on
    );
  }

  getPMHours(date, dur, is_date_on) {
    return this.getHours(
      date,
      dur,
      this.#salon.pm_on,
      this.#salon.pm_off,
      is_date_on
    );
  }

  getCalendars(date, setDate, plannings, salon, dur) {
    if (!salon) return [];

    this.#is_first_date_on = true;
    this.#bookings = plannings;
    this.#salon = salon;

    this.setDate(date);
    this.setDayOff(salon.day_off);
    this.setDateOff(salon.date_off);
    this.initCalendars();

    for (var day = 0; day < date.getMonthLength(); day++) {
      const date = new CDate(this.#date.year, this.#date.month, day + 1);
      const is_date_on = this.isDateOn(date) && salon.is_opened;

      if (is_date_on) this.setFirstDateOn(setDate, date);

      const am = this.getAMHours(date, dur, is_date_on);
      const pm = this.getPMHours(date, dur, is_date_on);
      const shift = CDate.getFirstDay(date.year, date.month);

      this.#days_list[shift + day] = {
        date,
        is_on: is_date_on,
        am_hours: am.hours,
        pm_hours: pm.hours,
      };
    }

    return this.#days_list;
  }

  getPlanning(date, plannings) {
    this.#bookings = plannings;

    this.setDate(date);
    this.initCalendars();

    for (var day = 0; day < date.getMonthLength(); day++) {
      const date = new CDate(this.#date.year, this.#date.month, day + 1);

      const apt = this.#bookings?.find((b) => date.isSameDate(b.date));
      const shift = CDate.getFirstDay(date.year, date.month);
      this.#days_list[shift + day] = { date, is_on: apt != undefined };
    }

    return this.#days_list;
  }
}
