// Import Custom Exceptions
import BadStatus from "exceptions/network_error/BadStatus";

/**
 * Send primary request.
 * @methods {@link setHeaders}, {@link get}, {@link post}, {@link delete},
 * {@link put}.
 */
export class Request {
  constructor(options = {}) {
    this._url = options.url || "";
    this._headers = options.headers || {};
    this._body = options.body || {};
  }

  /**
   * Set field of the header.
   * @param {String} key The key to add in the header.
   * @param {String} value The value of key.
   * @returns this.
   */
  setHeaders(key, value) {
    this._headers[key] = value;
    return this;
  }

  /**
   * Send a request.
   * @param {String} endpoint The endpoint of the request.
   * @param {Object} options Options of the request.
   * @returns The response of the request.
   *
   * @throws {NetworkStatuError} If the response is not successful.
   */
  async _fetch(endpoint, options = {}) {
    const response = await fetch(this._url + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!response.ok) throw new BadStatus(response.status);
    return response.json();
  }

  /**
   * Send a POST request.
   * @param {String} endpoint The endpoint of the request.
   * @param {Object} body The body of the request.
   * @param {Object} options Options of the request
   * @returns The response of the request.
   */
  async post(endpoint, body, options = {}) {
    return await this._fetch(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: "POST",
    });
  }

  async get(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "GET" });
  }

  async delete(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "DELETE" });
  }

  async put(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "PUT" });
  }

  async insertOne(collection, data = {}) {
    const document = { _id: Date.now().toString(), ...data };

    const resp = await this.post("/insertOne", {
      ...this._body,
      collection,
      document,
    });

    return resp.insertedId;
  }

  async findOne(collection, filter = {}, projection = {}) {
    const resp = await this.post("/findOne", {
      ...this._body,
      collection,
      filter,
      projection,
    });

    return resp.document;
  }

  async updateOne(collection, filter, update, upsert = false) {
    const resp = await this.post("/updateOne", {
      ...this._body,
      collection,
      filter,
      update,
      upsert,
    });

    if (upsert) return resp.insertedId;
  }

  async find(collection, options = {}) {
    const resp = await this.post("/find", {
      ...this._body,
      collection,
      filter: options.filter || {},
      projection: options.projection || {},
    });

    return resp.documents;
  }

  async deleteOne(collection, filter) {
    await this.post("/deleteOne", { ...this._body, collection, filter });
  }

  async aggregate(collection, pipeline) {
    const resp = await this.post("/aggregate", {
      ...this._body,
      collection,
      pipeline,
    });

    return resp["documents"];
  }
}
