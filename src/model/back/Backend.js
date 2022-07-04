// Super-class import
import { Request } from "./Request";

// Mixins-class imports
import { Add } from "./Add";
import { Delete } from "./Delete";
import { Find } from "./Find";
import { Update } from "./Update";

/**
 * The backend of the application.
 * @methods {@link signup}, {@link login}, {@link update}
 */
export class Backend {
  constructor() {
    this._options = {
      url: "https://data.mongodb-api.com/app/data-qqvij/endpoint/data/v1/action",
      body: { dataSource: "DB", database: "DB" },
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "S1ZLMOyQchvTE2y86c9RvecDlLwqUn8zyAQScJa9WDSfdwutPjg0NDEyDPwWKcOZ",
      },
    };

    this.add = new Add(this._options);
    this.delete = new Delete(this._options);
    this.get = new Find(this._options);
    this.update = new Update(this._options);
  }
}
