// Import Custom Exceptions
import BadStatus from "exceptions/network_error/BadStatus";

/**
 * Send primary request.
 * @methods {@link setHeaders}, {@link get}, {@link post}, {@link delete},
 * {@link put}.
 */
export class Request {
  #url;
  #headers;
  #body;

  constructor(options = {}) {
    this.#url = options.url || "";
    this.#headers = options.headers || {};
    this.#body = options.body || {};
  }

  /**
   * Set field of the header.
   * @param {String} key The key to add in the header.
   * @param {String} value The value of the key.
   * @returns this.
   */
  setHeaders(key, value) {
    this.#headers[key] = value;
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
    const response = await fetch(this.#url + endpoint, {
      ...options,
      headers: this.#headers,
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

  /**
   * Send a GET REQUEST
   * @param {String} endpoint The url endpoint of the request
   * @param {Object} options The body of the request.
   * @returns The response of the request.
   */
  async get(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "GET" });
  }

  /**
   * Send a DELETE REQUEST
   * @param {String} endpoint The url endpoint of the request
   * @param {Object} options The body of the request.
   * @returns The response of the request.
   */
  async delete(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "DELETE" });
  }

  /**
   * Send a PUT REQUEST
   * @param {String} endpoint The url endpoint of the request
   * @param {Object} options The body of the request.
   * @returns The response of the request.
   */
  async put(endpoint, options = {}) {
    return await this._fetch(endpoint, { ...options, method: "PUT" });
  }

  /**
   * Insert single object in database.
   * @param {String} collection The collection name in the database.
   * @param {Object} data The data to insert.
   * @returns The ID of the element inserted.
   */
  async insertOne(collection, data = {}) {
    const document = { _id: Date.now().toString(), ...data };

    const resp = await this.post("/insertOne", {
      ...this.#body,
      collection,
      document,
    });

    return resp.insertedId;
  }

  /**
   * Find single object in database.
   * @param {String} collection The collection name in the database.
   * @param {Object} filter The conditions filtering to apply before finding object.
   * @param {Object} projection The projection of the response.
   * @returns The response of the request.
   */
  async findOne(collection, filter = {}, projection = {}) {
    const resp = await this.post("/findOne", {
      ...this.#body,
      collection,
      filter,
      projection,
    });

    return resp.document;
  }

  /**
   * Update single object in database
   * @param {String} collection The collection name in the database.
   * @param {Object} filter The conditions filtering to apply before finding object.
   * @param {*} update The new data to update.
   * @param {*} upsert If true, add odject if no object was found. (default false)
   * @returns The ID inserted if upsert is true
   */
  async updateOne(collection, filter, update, upsert = false) {
    const resp = await this.post("/updateOne", {
      ...this.#body,
      collection,
      filter,
      update,
      upsert,
    });

    if (upsert) return resp.insertedId;
  }

  /**
   * Find multiple object in the database.
   * @param {String} collection The collection name in the database.
   * @param {Object} options Add filter field to filtering to apply before finding object.
   * Add projection field to set the projection of the response.
   * @returns The response of the request.
   */
  async find(collection, options = {}) {
    const resp = await this.post("/find", {
      ...this.#body,
      collection,
      filter: options.filter || {},
      projection: options.projection || {},
    });

    return resp.documents;
  }

  /**
   * Delete single object in the database.
   * @param {String} collection The collection name in the database.
   * @param {Object} filter The conditions filtering to apply before finding object.
   */
  async deleteOne(collection, filter) {
    await this.post("/deleteOne", { ...this.#body, collection, filter });
  }

  /**
   * Send aggregate request in the database.
   * @param {String} collection The collection name in the database.
   * @param {*} pipeline
   * @returns
   */
  async aggregate(collection, pipeline) {
    const resp = await this.post("/aggregate", {
      ...this.#body,
      collection,
      pipeline,
    });

    return resp["documents"];
  }
}
