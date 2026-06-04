const axios = require('axios');
const config = require('./config');

class APIController {
  constructor() {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers
    });
  }

  async get(endpoint) {
    try {
      const response = await this.client.get(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await this.client.post(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await this.client.put(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await this.client.delete(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = APIController;
