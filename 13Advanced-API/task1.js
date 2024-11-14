// Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL-адресу, викликаючи помилку. Потім за допомогою Jest напишіть тест, який перевіряє, чи правильно обробляється помилка та чи повертається належне повідомлення про помилку.

const axios = require('axios')
const { APIcodes } = require('./APIcodes')

async function getUrl(url) {
  await axios.get(url)
    .then(response => response)
    .catch(error => {
      switch (error.code) {
        case APIcodes.invalidHost: throw new Error(`Domain not found: ${error.hostname}`)
        case APIcodes.invalidResource: throw new Error(`Resource not found: ${error.config.url}`)
        default: throw new Error('Unexpected error: ', error)
      }
    })

  //throw new Error('The url domain doesn\'t exist') 
}

module.exports = {
  getUrl
}