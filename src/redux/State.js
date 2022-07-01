import Utils from "../model/Utils";
import { Schema } from "model/front/Schema";

const schema = new Schema();

/** The default user state. */
export const state_user = Utils.removeKey(
  schema.schemaUser(),
  "status",
  "password"
);

export const state_access = { access: null };

export const state_service = [schema.schemaService()];
