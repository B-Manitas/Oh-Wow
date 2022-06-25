import { Request } from "./Request";

class Backend extends Request {
  constructor() {
    super({
      url: "https://data.mongodb-api.com/app/data-qqvij/endpoint/data/v1/action",
      headers: { "Content-Type": "application/json" },
    });
    this._key =
      "S1ZLMOyQchvTE2y86c9RvecDlLwqUn8zyAQScJa9WDSfdwutPjg0NDEyDPwWKcOZ";
    this._body = { dataSource: "DB", database: "DB" };
  }

  signup(user) {
    const resp = this.post("/insertOne", {
      ...this.body,
      collection: "user",
      document: { ...user },
    });

    return resp["insertedId"];
  }

  login(user) {
    const resp = this.post("/findOne", {
      ...this.body,
      collection: "user",
      filter: { ...user },
    });

    return resp["document"];
  }
}

export const backend = new Backend();
