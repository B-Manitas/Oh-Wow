import Formatter from "../Model/Formatter";

test("formattingFirstname", () => {
  expect(Formatter.formattingFirstname("user")).toEqual("User");
  expect(Formatter.formattingFirstname("user name")).toEqual("User name");
});

test("formattingLastname", () => {
  expect(Formatter.formattingLastname("user")).toEqual("USER");
  expect(Formatter.formattingLastname("user name")).toEqual("USER NAME");
});
