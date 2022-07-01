import Calendars from "model/Calendars";
import { IsFormat } from "../model/front/IsFormat";

const is_format = new IsFormat();

test("isName", () => {
  expect(is_format.isName("")).toBe(false);
  expect(is_format.isName("user")).toBe(true);
});

test("isDate", () => {
  expect(is_format.isDate("")).toBe(false);
  expect(is_format.isDate("date")).toBe(false);
  expect(is_format.isDate(Calendars.ISOToday())).toBe(false);
  expect(is_format.isDate(Calendars.ISOTomorrow().toString())).toBe(false);
  expect(is_format.isDate(Calendars.ISOYesterday().toString())).toBe(true);
  expect(is_format.isDate("01-01-2000")).toBe(false);
  expect(is_format.isDate("2000-01-01")).toBe(true);
});

test("isPassword", () => {
  expect(is_format.isPassword("")).toBe(false);
  expect(is_format.isPassword("mypass")).toBe(false);
  expect(is_format.isPassword("Password9")).toBe(true);
  expect(is_format.isPassword("Password9?")).toBe(true);
  expect(is_format.isPassword("Pm9")).toBe(false);
  expect(is_format.isPassword("password9")).toBe(false);
  expect(is_format.isPassword("PASSWORD9")).toBe(false);
  expect(is_format.isPassword("Pa9_%@.srd9?")).toBe(true);
});

test("isMail", () => {
  expect(is_format.isMail("")).toBe(false);
  expect(is_format.isMail("user")).toBe(false);
  expect(is_format.isMail("user@address")).toBe(false);
  expect(is_format.isMail("user@address@user")).toBe(false);
  expect(is_format.isMail("user@address@user.com")).toBe(false);
  expect(is_format.isMail("user@address.c")).toBe(false);
  expect(is_format.isMail("user@address.com")).toBe(true);
});

test("isPhone", () => {
  expect(is_format.isPhone("")).toBe(false);
  expect(is_format.isPhone("phone")).toBe(false);
  expect(is_format.isPhone("070000")).toBe(false);
  expect(is_format.isPhone("0700000000")).toBe(true);
  // expect(is_format.isPhone("+216O700000000")).toBe(true);
  // expect(is_format.isPhone("+33O700000000")).toBe(true);
});

test("isAuthcode", () => {
  expect(is_format.isAuthcode("")).toBe(false);
  expect(is_format.isAuthcode("abs")).toBe(false);
  expect(is_format.isAuthcode("2021")).toBe(false);
  expect(is_format.isAuthcode("aaa2021")).toBe(false);
  expect(is_format.isAuthcode("a2367199")).toBe(false);
  expect(is_format.isAuthcode("236719")).toBe(true);
});

test("isDayOff", () => {
  expect(is_format.isDayOff("")).toBe(false);
  expect(is_format.isDayOff({})).toBe(false);
  expect(is_format.isDayOff({ a: 1 })).toBe(false);
  expect(is_format.isDayOff(is_format.schemaSalon().day_off)).toBe(true);
  expect(is_format.isDayOff({ ...is_format.schemaSalon().day_off, a: 1 })).toBe(
    false
  );
});

test("isDateOff", () => {
  expect(is_format.isDateOff("")).toBe(true);
  expect(is_format.isDateOff("abc")).toBe(false);
  expect(is_format.isDateOff("25")).toBe(false);
  expect(is_format.isDateOff("00/00")).toBe(false);
  expect(is_format.isDateOff("aa/bb")).toBe(false);
  expect(is_format.isDateOff("1/0")).toBe(false);
  expect(is_format.isDateOff("1/1")).toBe(false);
  expect(is_format.isDateOff("01/1")).toBe(false);
  expect(is_format.isDateOff("1/01")).toBe(false);
  expect(is_format.isDateOff("2020/01")).toBe(false);
  expect(is_format.isDateOff("01/2020")).toBe(false);
  expect(is_format.isDateOff("99/01")).toBe(false);
  expect(is_format.isDateOff("01/99")).toBe(false);
  expect(is_format.isDateOff("01/00")).toBe(false);
  expect(is_format.isDateOff("01/01")).toBe(true);
  expect(is_format.isDateOff("30/02")).toBe(false);
  expect(is_format.isDateOff("31/01")).toBe(true);
  expect(is_format.isDateOff("32/01")).toBe(false);
  expect(is_format.isDateOff("30/06")).toBe(true);
  expect(is_format.isDateOff("31/06")).toBe(false);
  expect(is_format.isDateOff("14/07;25/12;")).toBe(true);
  expect(is_format.isDateOff("14/07;25/12")).toBe(true);
  expect(is_format.isDateOff("32/01;25/12")).toBe(false);
  expect(is_format.isDateOff("14;25/12")).toBe(false);
  expect(is_format.isDateOff("14/07;@25/12")).toBe(false);
  expect(is_format.isDateOff("14/07;a")).toBe(false);
});

test("isBool", () => {
  expect(is_format.isBool("")).toBe(false);
  expect(is_format.isBool(true)).toBe(true);
  expect(is_format.isBool(false)).toBe(true);
});
