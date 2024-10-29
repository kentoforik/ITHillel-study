// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

import { EBook, elBooks, fileFormats } from './task2.js';

class BookExtendedWithGetters extends EBook {
  get title() {
    return this._title
  }
  get author() {
    return this._title
  }
  get publishYear() {
    return this._publishYear
  }

  set title(newTitle) {
    return typeof newTitle === 'string' ? this._title = newTitle : console.log("Book title should be a string. Title is not changed.")
  }
  set author(newAuthor) {
    return typeof newAuthor === 'string' ? this._author = newAuthor : console.log("Book author should be a string. Author is not changed.")
  }
  set publishYear(newYear) {
    return typeof newYear === 'number' ? this._publishYear = newYear : console.log("Publish year should be a number. Title is not changed.")
  }
}

const newBook = new BookExtendedWithGetters("I, Robot", "Isaac Asimov", 1950)

newBook.title = 'I, NOT robot' //success
console.log(newBook.title) //Changed title

newBook.title = 123 //Error
console.log(newBook.title) //Initial title title