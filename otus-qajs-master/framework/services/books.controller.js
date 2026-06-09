const axios = require('axios');
const { baseUrl } = require('../config/api.config');

class BooksController {
  constructor(token) {
    this.token = token;
    this.apiClient = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  async addBook(payload) {
    console.log(payload);
    const res = await this.apiClient.post('/BookStore/v1/Books', payload);
    return res.data;
  }

  async getBookByISBN(isbn) {
    const res = await this.apiClient.get(`/BookStore/v1/Book?ISBN=${isbn}`);
    return res.data;
  }

  async updateBook(isbn, payload) {
    // По документации Bookstore: PUT /BookStore/v1/Books/{ISBN}
    const res = await this.apiClient.put(`/BookStore/v1/Books/${isbn}`, payload);
    return res.data;
  }

  async deleteBook(isbn) {
    const res = await this.apiClient.delete(`/BookStore/v1/Book`, {
      params: { ISBN: isbn },
    });
    // API возвращает 204 без тела, поэтому можно вернуть статус
    return res.status;
  }
}

module.exports = BooksController;
