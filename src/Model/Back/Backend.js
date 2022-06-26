import { Request } from "./Request";

export class Backend extends Request {
  constructor() {
    super({
      url: "https://data.mongodb-api.com/app/data-qqvij/endpoint/data/v1/action",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "S1ZLMOyQchvTE2y86c9RvecDlLwqUn8zyAQScJa9WDSfdwutPjg0NDEyDPwWKcOZ",
      },
    });

    this._body = { dataSource: "DB", database: "DB" };
  }

  async signup(user) {
    const resp = await this.post("/insertOne", {
      ...this._body,
      collection: "user",
      document: { ...user },
    });

    return resp["insertedId"];
  }

  async login(user) {
    const resp = await this.post("/findOne", {
      ...this._body,
      collection: "user",
      filter: { ...user },
      projection: { _id: 1, firstname: 1 },
    });

    return resp["document"].firstname;
  }
}
