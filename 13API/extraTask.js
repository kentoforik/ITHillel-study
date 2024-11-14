// Назва: Налаштування інтерсепторів
// Складність: середній
// додати логування за допомогою Axios interceptors запитів і респонсів
// До домашки має бути прикріплений ПР, і скриншот успішного виконання тестів на локальній машині.

import axios from 'axios';

//TO DO:  make requests/response order sequential

export async function logAxios(logResponseData = false) {
  axios.interceptors.request.use(
    config => {
      console.log(`Request to ${config.url} is sent with method ${config.method.toUpperCase()}. \n`)
      return config
    },
    error => {
      console.log('Request failed with the error:', error)
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    response => {
      console.log(`Received response with status ${response.status}.`)
      logResponseData ? console.log(`Response data: ${response.data}`) : '';
      return response;
    },
    error => {
      console.log('Unexpected response error occurred:', error)
      return Promise.reject(error);
    }
  )
}

//logAxios(true)

//axios.get('https://google.com')
