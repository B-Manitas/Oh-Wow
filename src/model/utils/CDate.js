import { MONTHS } from "constants/DAYS";

export default class CDate extends Date {
  #DAY_MS = 60000;

  constructor(year = 0, month = 1, day = 0, hours = 0, minute = 0) {
    if (!year && month == 1 && !day && !hours && !minute) super();
    else if (month == 1 && !day && !hours && !minute) super(year * 60000);
    else super(year, month - 1, day, hours, minute);
  }

  get year() {
    return this.getFullYear();
  }

  get month() {
    return this.getMonth();
  }

  get date() {
    return this.getDate();
  }

  static today() {
    return new CDate().removeTime();
  }

  static isValid(date) {
    return date instanceof CDate && date.getTimestamp() === date.getTimestamp();
  }

  static getMonthLength(year, month) {
    return new Date(year, month, 0).getDate();
  }

  static getFirstDay(year, month) {
    return new CDate(year, month, 1).getDay();
  }

  static toTimeString(time) {
    const minutes = time % 60;
    const hours = Math.floor(time / 60);
    if (hours) return `${hours}h${minutes.toString().padStart(2, "0")}`;
    else return `${minutes.toString().padStart(2, "0")}min`;
  }

  static removeTime(date) {
    return new CDate(date.getFullYear(), date.getMonth(), date.getDate());
  }

  static timeToMinute(time) {
    if (typeof time === "number") return time;

    time = time.replace(/[^h0-9]/g, "");
    const [minutes, hours] = time.split("h").reverse();

    return 60 * parseInt(hours || 0) + parseInt(minutes || 0);
  }

  getFirstDate() {
    return new CDate(this.getFullYear(), this.getMonth(), 1);
  }

  getLastDate() {
    return new CDate(this.getFullYear(), this.getMonth() + 1, 0);
  }

  getTimestamp() {
    return Math.floor(super.getTime() / this.#DAY_MS);
  }

  getMonthLength() {
    return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
  }

  getMonth() {
    return super.getMonth() + 1;
  }

  getDay() {
    return (super.getDay() + 6) % 7;
  }

  getTime() {
    return this.getMinutes() + 60 * this.getHours();
  }

  setTime(minutes) {
    this.setHours(0, minutes);
    return this;
  }

  tomorow() {
    return new CDate(this.getFullYear(), this.getMonth(), this.getDate() + 1);
  }

  isPast() {
    return this.getTimestamp() < new CDate().getTimestamp();
  }

  isToday() {
    return (
      CDate.removeTime(this).getTimestamp() === CDate.today().getTimestamp()
    );
  }

  isSameDate(date) {
    date = date instanceof CDate ? date : new CDate(date);
    return (
      this.getDate() === date.getDate() &&
      this.getMonth() === date.getMonth() &&
      this.getFullYear() === date.getFullYear()
    );
  }

  isZeroTime() {
    return this.getTime() == 0;
  }

  toTimeString() {
    const minute = this.getMinutes().toString().padStart(2, "0");
    const hours = this.getHours();
    return `${hours}h${minute}`;
  }

  toDateString(shorted = false) {
    const strDay = this.getDate().toString().padStart(2, "0");

    if (shorted) {
      const strMonth = this.getMonth().toString().padStart(2, "0");
      return `${strDay}/${strMonth}`;
    } else {
      const strMonth = MONTHS[this.getMonth() - 1];
      const strYear = this.getFullYear().toString();
      return `${strDay} ${strMonth} ${strYear}`;
    }
  }

  removeTime() {
    this.setHours(0, 0, 0, 0);
    return this;
  }

  copy() {
    return new CDate(this.getTimestamp());
  }
}
