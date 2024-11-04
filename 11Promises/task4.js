// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

import { urls } from './urls.js'
import fetch from 'node-fetch'

class FetchUser {

  getUser = async function () {
    try {
      const response = await fetch(urls.user)
      if (response.ok) {
        const result = await response.json()
        return result
      }
    } catch (err) {
      console.log(err)
    }
  }
}

class FetchTodo {
  getTodo = async function () {
    try {
      const response = await fetch(urls.todo)
      if (response.ok) {
        const result = await response.json()
        return result
      }
    } catch (err) {
      console.log(err)
    }
  }
}


const todo = new FetchTodo()
const user = new FetchUser()

Promise.all([todo.getTodo(), user.getUser()])
  .then(results => console.log(results))
  .catch(err => console.log(err))
