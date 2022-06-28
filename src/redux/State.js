import Utils from "../model/Utils";
import { Schema } from "model/front/Schema";

const schema = new Schema();

/** The default user state. */
export const user_state = Utils.removeKey(
  schema.schemaUser(),
  "status",
  "password"
);
