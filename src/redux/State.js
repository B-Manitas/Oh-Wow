import Utils from "../model/Utils";
import { Schema } from "../model/front/Schema";

const schema = new Schema();
export const user_state = Utils.removeKey(schema.schemaUser(), "status");
