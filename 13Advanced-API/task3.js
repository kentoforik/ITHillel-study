// Назва: Mocking Axios in Jest Складність: складний
// Замість того, щоб робити фактичні HTTP-запити, використовуйте Jest, щоб налаштувати моки на реквести з Axios. Напишіть тести, які імітують як успішні, так і невдалі HTTP-запити, до замоканих ендпойнтів, і переконайтеся, що ваш код поводиться належним чином.

// До домашки має бути прикріплений ПР, і скріншот успішного виконання тестів на локальній машині.


const axios = require('axios')

async function callMockedApi(url, method) {
  try {
    return await axios[method](url)
  } catch (error) {
    return error
  }
}

module.exports = {
  callMockedApi
}