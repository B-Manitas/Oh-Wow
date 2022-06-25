import { NetworkError } from "../Exceptions/NetworkError";

export class Request {
  constructor(options = {}) {
    this._url = options.url || "";
    this._headers = options.headers || {};
  }

  setHeaders(key, value) {
    this._headers[key] = value;
    return this;
  }

  async _fetch(endpoint, options = {}) {
    const response = await fetch(this.url + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!response.ok) throw new NetworkError();
    return response.json();
  }

  get(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "GET" });
  }

  post(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "POST" });
  }

  delete(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "DELETE" });
  }

  put(endpoint, options = {}) {
    return this._fetch(endpoint, { ...options, method: "PUT" });
  }
}
