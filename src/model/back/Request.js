// Import Custom Exceptions
import NetworkStatusError from "exceptions/NetworkStatusError";

/**
 * Send primary request.
 * @methods {@link setHeaders}, {@link get}, {@link post}, {@link delete}, 
 * {@link put}.
 */
export class Request {
  constructor(options = {}) {
    this._url = options.url || "";
    this._headers = options.headers || {};
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

    if (!response.ok) throw new NetworkStatusError();
    return response.json();
  }

  get(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "GET" });
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

  delete(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "DELETE" });
  }

  put(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "PUT" });
  }
}
