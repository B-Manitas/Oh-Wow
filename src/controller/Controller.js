import { Find } from "./Find";
import { Add } from "./Add";
import { OnClose } from "./OnClose";
import { Navigation } from "./Navigation";
import { SuperController } from "./SuperController";
import { Update } from "./Update";
import { Delete } from "./Delete";
import { OnPress } from "./OnPress";
import { OnChange } from "./OnChange";

export class Controller extends SuperController {
  /**
   * Manage the link between the application and the user.
   * @param {Backend} backend The backend of the application.
   * @param {Frontend} frontend The frontend of the application.
   */
  constructor(backend, frontend) {
    super(backend, frontend);
    this.backend = backend;
    this.frontend = frontend;

    this.get = new Find(backend, frontend);
    this.add = new Add(backend, frontend);
    this.update = new Update(backend, frontend);
    this.delete = new Delete(backend, frontend);
    this.onClose = new OnClose(backend, frontend);
    this.onPress = new OnPress(backend, frontend);
    this.onChange = new OnChange(backend, frontend);
    this.navigation = new Navigation(backend, frontend);
  }

  fakeAudit(data) {
    return this.frontend.fakeAudit(data);
  }
}
