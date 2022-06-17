import IsValidField from "../model/IsValidField";

test("Format Password", () => {
  expect(IsValidField.isFormatPassword("")).toBe(false);
  expect(IsValidField.isFormatPassword("mypass")).toBe(false);
  expect(IsValidField.isFormatPassword("mypassword1")).toBe(false);
  expect(IsValidField.isFormatPassword("mypAs1")).toBe(false);
  expect(IsValidField.isFormatPassword("m1234567A")).toBe(true);
  expect(IsValidField.isFormatPassword("mypasswOrd1")).toBe(true);
});

test("Format Mail", () => {
  expect(IsValidField.isFormatMail("")).toBe(false);
  expect(IsValidField.isFormatMail("mail")).toBe(false);
  expect(IsValidField.isFormatMail("a@b.c")).toBe(false);
  expect(IsValidField.isFormatMail("a@b.com")).toBe(true);
  expect(IsValidField.isFormatMail("a?.@b.com")).toBe(false);
  expect(IsValidField.isFormatMail("a@b@c.dom")).toBe(false);
  expect(IsValidField.isFormatMail("my@mail.co£")).toBe(false);
  expect(IsValidField.isFormatMail("m£y@mail.com")).toBe(false);
  expect(IsValidField.isFormatMail("m2y_@mail.com")).toBe(true);
});

test("Format Phone", () => {
    expect(IsValidField.isFormatPhone("")).toBe(false);
    expect(IsValidField.isFormatPhone("tel")).toBe(false);
    expect(IsValidField.isFormatPhone("+3301_020")).toBe(false);
    expect(IsValidField.isFormatPhone("01020")).toBe(false);
    expect(IsValidField.isFormatPhone("+216 0700000001")).toBe(true);
    expect(IsValidField.isFormatPhone("+33 0700000001")).toBe(true);
    expect(IsValidField.isFormatPhone("+33 07.00.00.00.01")).toBe(false);
    expect(IsValidField.isFormatPhone("0700000001")).toBe(true);
    expect(IsValidField.isFormatPhone("+33£7.00.00.00.01")).toBe(false);
})

test("Format Authcode", () => {
  expect(IsValidField.isFormatAuthcode("")).toBe(false);
  expect(IsValidField.isFormatAuthcode("abs")).toBe(false);
  expect(IsValidField.isFormatAuthcode("2021")).toBe(false);
  expect(IsValidField.isFormatAuthcode("aaa2021")).toBe(false);
  expect(IsValidField.isFormatAuthcode("236719")).toBe(true);
  expect(IsValidField.isFormatAuthcode("2367199")).toBe(false);
  expect(IsValidField.isFormatAuthcode("a2367199")).toBe(false);
})