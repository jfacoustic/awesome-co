class HttpClient {
  constructor() {
    this._baseUrl = process.env.REACT_APP_API_URL
  }

  async get(path) {
    const result = await fetch(`${this._baseUrl}${path}`)
    return await result.json();
  }
}

export default HttpClient;