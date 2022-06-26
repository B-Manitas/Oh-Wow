import IsFormat from "../Model/IsFormat";
import Calendars from "../Model/Calendars";

test("isName", () => {
  expect(IsFormat.isName("")).toBe(false);
  expect(IsFormat.isName("user")).toBe(true);
});

test("isBirthdate", () => {
  expect(IsFormat.isBirthdate("")).toBe(false);
  expect(IsFormat.isBirthdate("date")).toBe(false);
  expect(IsFormat.isBirthdate(Calendars.ISOToday())).toBe(false);
  expect(IsFormat.isBirthdate(Calendars.ISOTomorrow().toString())).toBe(false);
  expect(IsFormat.isBirthdate(Calendars.ISOYesterday().toString())).toBe(true);
  expect(IsFormat.isBirthdate("01-01-2000")).toBe(false);
  expect(IsFormat.isBirthdate("2000-01-01")).toBe(true);
});

test("isPassword", () => {
  expect(IsFormat.isPassword("")).toBe(false);
  expect(IsFormat.isPassword("mypass")).toBe(false);
  expect(IsFormat.isPassword("Password9")).toBe(true);
  expect(IsFormat.isPassword("Password9?")).toBe(true);
  expect(IsFormat.isPassword("Pm9")).toBe(false);
  expect(IsFormat.isPassword("password9")).toBe(false);
  expect(IsFormat.isPassword("PASSWORD9")).toBe(false);
  expect(IsFormat.isPassword("Pa9_%@.srd9?")).toBe(true);
});

test("isMail", () => {
  expect(IsFormat.isMail("")).toBe(false);
  expect(IsFormat.isMail("user")).toBe(false);
  expect(IsFormat.isMail("user@address")).toBe(false);
  expect(IsFormat.isMail("user@address@user")).toBe(false);
  expect(IsFormat.isMail("user@address@user.com")).toBe(false);
  expect(IsFormat.isMail("user@address.c")).toBe(false);
  expect(IsFormat.isMail("user@address.com")).toBe(true);
});

test("isPhone", () => {
  expect(IsFormat.isPhone("")).toBe(false);
  expect(IsFormat.isPhone("phone")).toBe(false);
  expect(IsFormat.isPhone("070000")).toBe(false);
  expect(IsFormat.isPhone("0700000000")).toBe(true);
  // expect(IsFormat.isPhone("+216O700000000")).toBe(true);
  // expect(IsFormat.isPhone("+33O700000000")).toBe(true);
});

test("isAuthcode", () => {
  expect(IsFormat.isAuthcode("")).toBe(false);
  expect(IsFormat.isAuthcode("abs")).toBe(false);
  expect(IsFormat.isAuthcode("2021")).toBe(false);
  expect(IsFormat.isAuthcode("aaa2021")).toBe(false);
  expect(IsFormat.isAuthcode("a2367199")).toBe(false);
  expect(IsFormat.isAuthcode("236719")).toBe(true);
});
