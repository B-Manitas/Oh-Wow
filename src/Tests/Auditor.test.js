import Auditor from "../Model/Auditor";

var auditor = new Auditor();

test("getInvalidData", () => {
  var data_1 = { firstname: false, lastname: false, phone: true };
  var data_2 = {};
  expect(auditor.getInvalidData(data_1)).toEqual(["firstname", "lastname"]);
  expect(auditor.getInvalidData(data_2)).toEqual([]);
});
