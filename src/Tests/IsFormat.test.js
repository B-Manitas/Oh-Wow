import { IsFormat } from "../Model/IsFormat";
import Calendars from "../Model/Calendars";

var is_format = new IsFormat();

test("isFirstame", () => {
  expect(is_format.isFirstname("")).toBe(false);
  expect(is_format.isFirstname("USERS")).toBe(false);
  expect(is_format.isFirstname("users")).toBe(true);
});

test("isLastame", () => {
  expect(is_format.isLastname("")).toBe(false);
  expect(is_format.isLastname("users")).toBe(false);
  expect(is_format.isLastname("USERS")).toBe(true);
});

test("isBirthdate", () => {
  expect(is_format.isBirthdate("")).toBe(false);
  expect(is_format.isBirthdate("date")).toBe(false);
  expect(is_format.isBirthdate(Calendars.ISOToday())).toBe(false);
  expect(is_format.isBirthdate(Calendars.ISOTomorrow().toString())).toBe(false);
  expect(is_format.isBirthdate(Calendars.ISOYesterday().toString())).toBe(true);
  expect(is_format.isBirthdate("01-01-2000")).toBe(false);
  expect(is_format.isBirthdate("2000-01-01")).toBe(true);
});

test("isPassword", () => {
  expect(is_format.isPassword("")).toBe(false);
  expect(is_format.isPassword("mypass")).toBe(false);
  expect(is_format.isPassword("Password9")).toBe(true);
  expect(is_format.isPassword("Password9?")).toBe(true);
  expect(is_format.isPassword("Pm9")).toBe(false);
  expect(is_format.isPassword("password9")).toBe(false);
  expect(is_format.isPassword("PASSWORD9")).toBe(false);
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
