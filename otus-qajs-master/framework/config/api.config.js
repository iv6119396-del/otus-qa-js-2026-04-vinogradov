module.exports = {
  baseUrl: 'https://bookstore.demoqa.com',
  auth: {
    username: process.env.BOOKSTORE_USERNAME || 'demoqa_user',
    password: process.env.BOOKSTORE_PASSWORD || 'demoqa_pass',
  },
};
