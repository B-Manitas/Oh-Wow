import CDate from "./CDate";

export default class Calendar {
  #isFirstDateOn = true;
  #dayOff;
  #dateOff;
  #date;
  #daysList;
  #bookings;
  #salon;

  setDate(date) {
    if (!date) this.#date = CDate.today();
    else this.#date = date;
  }

  setDayOff(salonDayOff, staffDayOff) {
    this.#dayOff = Object.keys(salonDayOff).filter((k) => salonDayOff[k]);
    this.#dayOff.push(
      ...Object.keys(staffDayOff).filter((k) => staffDayOff[k])
    );
  }

  setDateOff(salonDateOff, staffDateOff) {
    this.#dateOff = salonDateOff.split(";");
    this.#dateOff.push(...staffDateOff.split(";"));
  }

  setFirstDateOn(func, date) {
    if (!this.#isFirstDateOn) return;

    this.#isFirstDateOn = false;
    func(date);
  }

  initCalendars() {
    this.#daysList = new Array(42).fill(0);
  }

  isDateOn(date) {
    return (
      (!date.isPast() || (date.isPast() && date.isSameDate(CDate.today()))) &&
      !this.#dayOff.includes(date.getDay().toString()) &&
      !this.#dateOff.includes(date.toDateString(true))
    );
  }

  isHoursOn(date, time, dur) {
    if (date.copy().setTime(time).isPast()) return false;

    // Only get bookings that are the same date as the time date.
    const bookings = this.#bookings.filter((b) => date.isSameDate(b.date));

    date = date.getTimestamp();

    // True if there is no other reservation for the same date.
    if (!bookings) return true;
    // Else check if each reservation starts and ends BEFORE the time date plus duration.
    // Or starts and ends AFTER the time date plus duration.
    else
      return bookings.every((b) => {
        // Get the time of the booking date. (note: date is a zero time date)
        const bookTime = Math.abs(b.date - date);

        return (
          (time < bookTime && time + dur < bookTime + b.duration) ||
          (time > bookTime && time + dur > bookTime + b.duration)
        );
      });
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
      this.#salon.hours_on.am_on,
      this.#salon.hours_on.am_off,
      is_date_on
    );
  }

  getPMHours(date, dur, is_date_on) {
    return this.getHours(
      date,
      dur,
      this.#salon.hours_on.pm_on,
      this.#salon.hours_on.pm_off,
      is_date_on
    );
  }

  getCalendars(date, setDate, plannings, salon, dur, staff) {
    if (!salon) return [];

    this.#isFirstDateOn = true;
    this.#bookings = plannings;
    this.#salon = salon;

    this.setDate(date);
    this.setDayOff(salon.day_off, staff.day_off);
    this.setDateOff(salon.date_off, staff.date_off);
    this.initCalendars();

    for (var day = 0; day < date.getMonthLength(); day++) {
      const date = new CDate(this.#date.year, this.#date.month, day + 1);
      const isDateOn = this.isDateOn(date) && salon.is_opened;

      if (isDateOn) this.setFirstDateOn(setDate, date);

      const am = isDateOn ? this.getAMHours(date, dur, isDateOn) : [];
      const pm = isDateOn ? this.getPMHours(date, dur, isDateOn) : [];
      const shift = CDate.getFirstDay(date.year, date.month);

      this.#daysList[shift + day] = {
        date,
        is_on: isDateOn && (am.is_on || pm.is_on),
        am_hours: am.hours,
        pm_hours: pm.hours,
      };
    }

    return this.#daysList;
  }

  getPlanning(date, plannings) {
    this.#bookings = plannings;

    this.setDate(date);
    this.initCalendars();

    for (var day = 0; day < date.getMonthLength(); day++) {
      const date = new CDate(this.#date.year, this.#date.month, day + 1);

      const apt = this.#bookings?.find((b) => date.isSameDate(b.date));
      const shift = CDate.getFirstDay(date.year, date.month);
      this.#daysList[shift + day] = { date, is_on: apt != undefined };
    }

    return this.#daysList;
  }
}
