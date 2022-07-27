import { Controller } from "controller/Controller";
import { Backend } from "./back/Backend";
import { Frontend } from "./front/Frontend";

const backend = new Backend();
const frontend = new Frontend(backend);
export const controller = new Controller(frontend);
