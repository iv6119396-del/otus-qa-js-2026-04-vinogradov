// Контроллер для авторизации

const axios = require('axios');
const { baseUrl, auth } = require('../config/api.config');

class AuthController {
  constructor() {
    this.apiClient = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(username = auth.username, password = auth.password) {
    const res = await this.apiClient.post('/Account/v1/Login', {
      userName: username,
      password,
    });
    return res.data.token;
  }
}

module.exports = new AuthController();
