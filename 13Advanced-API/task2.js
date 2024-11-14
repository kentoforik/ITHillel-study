// Назва: Testing Request Headers and Params Складність: середній
// Створіть функцію за допомогою Axios, щоб зробити запит, який містить кастомні хедери та параметри URL-адреси. Напишіть тест Jest, щоб переконатися, що заголовки та параметри правильно включені в запит.

const axios = require('axios')

async function getWithCustomHeadersParams(url, params, method, headers) {
  try {
    return await axios({
      baseURL: url,
      params: { ...params },
      method: method,
      headers: { ...headers },
    })
  } catch (error) {
    return error
  }
}

module.exports = {
  getWithCustomHeadersParams
}