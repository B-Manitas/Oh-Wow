// Super-class import
import { SuperFrontend } from "./SuperFrontend";

// Mixins-class imports
import { Find } from "./Find";
import { Update } from "./Update";
import { Delete } from "./Delete";
import { Add } from "./Add";

/**
 * The frontend of the application.
 * @methods {@link  add}, {@link  delete}, {@link  update}, {@link  get}
 *
 * @public These are the public attributes of the class.
 * - {@link backend} (Backend) The backend of the application.
 */
export class Frontend extends SuperFrontend {
  constructor(backend) {
    super(backend);
    this.backend = backend;
    
    this.add = new Add(backend);
    this.delete = new Delete(backend);
    this.get = new Find(backend);
    this.update = new Update(backend);
  }
}
