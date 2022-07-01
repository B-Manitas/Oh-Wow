import { Formatter } from "model/front/Formatter";

const formatter = new Formatter();

test("formattingFirstname", () => {
  expect(formatter.formatFirstname("user")).toEqual("User");
  expect(formatter.formatFirstname("user name")).toEqual("User name");
});

test("formattingLastname", () => {
  expect(formatter.formatLastname("user")).toEqual("USER");
  expect(formatter.formatLastname("user name")).toEqual("USER NAME");
});
