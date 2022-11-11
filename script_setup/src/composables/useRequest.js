export default () => ({
  async request(url = "", options = { method: "get" }) {
    return await fetch(`http://127.0.0.1:3003/news/${url}`, options).then(
      (res) => res.json()
    );
  },
  async get(url) {
    return await this.request(url);
  },
  async delete(url) {
    return await this.request(url, { method: "delete" });
  },
  async post(url, data) {
    return await this.request(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
});
