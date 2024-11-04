// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// 1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом:
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo

import fetch from 'node-fetch'
import { urls } from './urls.js'

function getTodo() {

  return fetch(urls.todo)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response status is ${response.status}`)
      }
      return response.json()
    })
    .catch(err => console.log('Error: ', err))
}
// getTodo().then(data => console.log('TODO: ', data));


// 2. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user

function getUser() {
  return fetch(urls.user)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response status is ${response.status}`)
      }
      return response.json()
    })
    .catch(err => console.log('Error: ', err))
}
// getUser().then(data => console.log('USER:', data));


// 3. Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних.

let todo, user;

Promise.all([getTodo(), getUser()])
  .then(results => {
    todo = results[0]
    user = results[1]
    console.log('TODO: ', todo, '\nUSER: ', user)
  })
  .catch(err => console.log('Error: ', err))

Promise.race([getUser(), getTodo()])
  .then(result => console.log('The result of first execute promise is: ', result))
  .catch(err => console.log('Error: ', err))


