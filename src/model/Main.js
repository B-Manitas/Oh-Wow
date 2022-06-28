import { Controller } from "controller/Controller";
import { Backend } from "./back/Backend";
import { Frontend } from "./front/Frontend";

const backend = new Backend();
export const frontend = new Frontend(backend);
export const controller = new Controller(backend, frontend);
