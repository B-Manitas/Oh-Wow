import Utils from "model/utils/Utils";
import { Schema } from "model/front/Schema";

const schema = new Schema();

/** The default user state. */
export const STATE_USER = Utils.removeKey(schema.user, "status", "password");

export const STATE_STATUS = { status: null };

export const state_service = [];
