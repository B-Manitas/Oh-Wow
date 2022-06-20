import Calendars from "../model/Calendars";

test("RemoveTime", () => {
  var date_with_time = new Date();
  var date = Calendars.removeTime(date_with_time);
  expect(date.getHours()).toEqual(0);
  expect(date.getMinutes()).toEqual(0);
  expect(date.getSeconds()).toEqual(0);
});

test("isPast", () => {
  expect(Calendars.isPast(Calendars.yesterday())).toBe(true);
  expect(Calendars.isPast(Calendars.today())).toBe(false);
});

test("isToday", () => {
  expect(Calendars.isToday(Calendars.today())).toBe(true);
  expect(Calendars.isToday(Calendars.tomorrow())).toBe(false);
});

test("NumberOfdays", () => {
  expect(Calendars.numberOfDays(2022, 2)).toEqual(28);
  expect(Calendars.numberOfDays(2022, 6)).toEqual(30);
  expect(Calendars.numberOfDays(2022, 7)).toEqual(31);
});

test("ConvertIdDay", () => {
  expect(Calendars.convertIdDay(0)).toEqual(6);
  expect(Calendars.convertIdDay(1)).toEqual(0);
  expect(Calendars.convertIdDay(2)).toEqual(1);
  expect(Calendars.convertIdDay(3)).toEqual(2);
  expect(Calendars.convertIdDay(4)).toEqual(3);
  expect(Calendars.convertIdDay(5)).toEqual(4);
  expect(Calendars.convertIdDay(6)).toEqual(5);
});