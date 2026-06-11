const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
   testEnvironment: 'allure-jest/node',
   testEnvironmentOptions: {
    resultsDir: 'reports/allure-results'
 }

};

module.exports = config;
