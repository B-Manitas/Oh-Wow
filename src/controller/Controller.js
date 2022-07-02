import { ControllerMain } from "./ControllerMain";
import { OnClose } from "./OnClose";
import { OnPress } from "./OnPress";

export class Controller {
  /**
   * Manage the link between the application and the user.
   * @param {Backend} backend The backend of the application.
   * @param {Frontend} frontend The frontend of the application.
   */
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
    this.getter = new ControllerMain(backend, frontend);
    this.onPress = new OnPress(backend, frontend);
    this.onClose = new OnClose(backend, frontend);
  }
}
