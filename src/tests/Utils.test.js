import Utils from "../model/Utils";

var date = new Date();
var today = date.getDate();
var month_length = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

test("past", () => {
  expect(Utils.isPast((today - 1) % month_length)).toBe(true);
  expect(Utils.isPast(today)).toBe(false);
});

test("isToday", () => {
  expect(Utils.isToday(today)).toBe(true);
  expect(Utils.isToday((today + 1) % month_length)).toBe(false);
});
