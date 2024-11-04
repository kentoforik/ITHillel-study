// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

import fetch from 'node-fetch';
import { urls } from './urls.js';

async function getTodoAsync() {
  try {
    const response = await fetch(urls.todo)
    if (response.ok) {
      const result = await response.json()
      return result
    } else {
      throw new Error(`Request failed with the status code ${response.status}`)
    }
  } catch (err) {
    console.log(err)
  }
}

async function getUserAsync() {
  try {
    const response = await fetch(urls.user)
    if (response.ok) {
      const result = await response.json()
      return result
    } else {
      throw new Error(`Request failed with the status code ${response.status}.`)
    }
  } catch (err) {
    console.log(err)
  }

}

Promise.all([getTodoAsync(), getUserAsync()])
  .then(results => console.log('All promises are executed with results: ', results))
  .catch(err => console.log('Error: ', err))

Promise.race([getUserAsync(), getTodoAsync()])
  .then(result => {
    console.log('The result of first executed promise is: ', result)
  })
  .catch(err => console.log('Error: ', err))