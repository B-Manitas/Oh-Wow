import { Controller } from "../Controller/Controller";
import { Backend } from "./Backend";
import { Frontend } from "./Frontend";

const backend = new Backend();
const frontend = new Frontend(backend);
export const controller = new Controller(backend, frontend);
