// Створити тестовий сценарій за допомогою пекеджу axios.
// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.
// Задача:
// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ


import axios from 'axios';

export async function fetchJSON({ url, method, data }) {
  return await axios({
    method: method,
    url: url,
    data: data
  })
    .then(response => {
      return {
        status: response.status,
        data: response.data
      }
    })
    .catch(err => console.log(err))
}