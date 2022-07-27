// Super-class import
import { SuperController } from "./SuperController";

// Mixins import
import { Find } from "./Find";
import { Add } from "./Add";
import { OnClose } from "./OnClose";
import { GoTo } from "./GoTo";
import { Update } from "./Update";
import { Delete } from "./Delete";
import { OnPress } from "./OnPress";
import { OnChange } from "./OnChange";
import { OnFormat } from "./OnFormat";
import { OnSearch } from "./OnSearch";

export class Controller extends SuperController {
  /**
   * Manage the link between the frontend model and the user.
   * @param {Frontend} frontend The frontend of the application.
   */
  constructor(frontend) {
    super(frontend);
    this.frontend = frontend;
    this.schema = frontend;

    this.get = new Find(frontend);
    this.add = new Add(frontend);
    this.update = new Update(frontend);
    this.delete = new Delete(frontend);
    this.onClose = new OnClose(frontend);
    this.onPress = new OnPress(frontend);
    this.onChange = new OnChange(frontend);
    this.goTo = new GoTo(frontend);
    this.onFormat = new OnFormat(frontend);
    this.onSearch = new OnSearch(frontend);
  }
}
