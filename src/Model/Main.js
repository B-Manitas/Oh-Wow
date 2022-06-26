import { Controller } from "../Controller/Controller";
import { Backend } from "./Back/Backend";
import { Frontend } from "./Front/Frontend";

const backend = new Backend();
const frontend = new Frontend(backend);
export const controller = new Controller(backend, frontend);
