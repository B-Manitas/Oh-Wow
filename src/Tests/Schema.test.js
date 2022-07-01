import { Schema } from "model/front/Schema";
const schema = new Schema();

test("isSchema", () => {
  expect(schema.isSchema({}, {})).toBe(true);
  expect(schema.isSchema(schema.schemaUser(), schema.schemaUser())).toBe(true);
  expect(schema.isSchema(schema.schemaSalon(), schema.schemaSalon())).toBe(
    true
  );
  expect(schema.isSchema(schema.schemaUser(), schema.schemaSalon())).toBe(
    false
  );
});
