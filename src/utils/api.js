export class Api {
  #baseurl;
  #headers;

  constructor({ baseUrl, headers }) {
    this.#baseurl = baseUrl;
    this.#headers = headers;
  }

  #onResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  getPosts() {
    return fetch(`${this.#baseurl}/posts`, {
      headers: {
        ...this.#headers,
      },
    }).then(this.#onResponse);
  }
}

const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
