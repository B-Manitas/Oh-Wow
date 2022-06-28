import { Request } from "model/back/Request";

export class Backend extends Request {
  /** The backend of the application. */
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

  /**
   * Send a request to register a new user.
   * @param {Object} user The user's data to register .
   * @returns {Number} The user's identifier after registration in the database.
   */
  async signup(user) {
    const resp = await this.post("/insertOne", {
      ...this._body,
      collection: "user",
      document: { ...user },
    });

    return resp["insertedId"];
  }

  /**
   * Send a request to get the user's data for the login.
   * @param {Object} user The user's data to log.
   * @returns {Object} Object containing the user's ID and first name.
   */
  async login(user) {
    const resp = await this.post("/findOne", {
      ...this._body,
      collection: "user",
      filter: { ...user },
      projection: { status: 0 },
    });

    return resp["document"];
  }
}
