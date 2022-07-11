import { Normalizer } from "model/front/Normalizer";

const normalizer = new Normalizer();

test("formattingFirstname", () => {
  expect(normalizer.firstname("user")).toEqual("User");
  expect(normalizer.firstname("user name")).toEqual("User name");
});

test("formattingLastname", () => {
  expect(normalizer.lastname("user")).toEqual("USER");
  expect(normalizer.lastname("user name")).toEqual("USER NAME");
});
