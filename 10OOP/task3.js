// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

import { Book, bookExamples } from './task1.js'
import { EBook, elBooks, fileFormats } from './task2.js';

class BookExtendedWithGetters extends Book {
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

// // Changing title
const newBook1 = new BookExtendedWithGetters(...Object.values(bookExamples[0]))
newBook1.title = 'I, NOT robot' //success
console.log('Book title changed to', newBook1.title) //Get changed title
console.log(newBook1)

newBook1.title = 123 //Validation Error
console.log(newBook1.title) //Get title - initial
console.log(newBook1) //whole object

// // Changing author
const newBook2 = new BookExtendedWithGetters(...Object.values(bookExamples[1]))
newBook2.author = 'Raymond Bradburrius' //success
console.log('Book author changed to', newBook2.author) //Get changed author
console.log(newBook2) //whole object

newBook2.author = 123 //Validation Error
console.log(newBook2.author) //Get author - initial
console.log(newBook2) //whole object

// Changing Year
const newBook3 = new BookExtendedWithGetters(...Object.values(bookExamples[2]))
newBook3.publishYear = 2024 //success
console.log('Book year changed to', newBook3.publishYear) //Get changed author
console.log(newBook3) //whole object

newBook3.publishYear = "Hello" //Validation Error
console.log(newBook3.publishYear) //Get author - initial
console.log(newBook3) //whole object

class EBookExtendedWithGetters extends EBook {
  get title() {
    return this._title
  }
  get author() {
    return this._author
  }
  get year() {
    return this._publishYear
  }
  get format() {
    return this._fileFormat
  }

  set title(newTitle) {
    return typeof newTitle === 'string' ? this._title = newTitle : console.log("Book title should be a string. Title is not changed.")
  }
  set author(newAuthor) {
    return typeof newAuthor === 'string' ? this._author = newAuthor : console.log("Book author should be a string. Author is not changed.")
  }
  set year(newYear) {
    return typeof newYear === 'number' ? this._publishYear = newYear : console.log("Publish year should be a number. Year is not changed.")
  }
  set format(newFormat) {
    return fileFormats.includes(newFormat) ? this._fileFormat = newFormat : console.log("File format should be one of: epub, pdf, fb2. Format is not changed.")
  }
}

// Changing title
const newEBook1 = new EBookExtendedWithGetters(...Object.values(bookExamples[0]))
newEBook1.title = 'Random Title' //success
console.log('EBook title changed to', newEBook1.title) //Get changed title
console.log(newEBook1)

newEBook1.title = 123 //Validation Error
console.log(newEBook1.title) //Get title - initial
console.log(newEBook1) //whole object

//Changing author
const newEBook2 = new EBookExtendedWithGetters(...Object.values(bookExamples[1]))
newEBook2.author = 'Random Author' //success
console.log('EBook author changed to', newEBook2.author) //Get changed author
console.log(newEBook2) //whole object

newEBook2.author = 123 //Validation Error
console.log(newEBook2.author) //Get author - initial
console.log(newEBook2) //whole object

// Changing Year
const newEBook3 = new EBookExtendedWithGetters(...Object.values(bookExamples[2]))
newEBook3.year = 2024 //success
console.log('EBook year changed to', newEBook3.year) //Get changed year
console.log(newEBook3) //whole object

newEBook3.year = "Hello" //Validation Error
console.log(newEBook3.year) //Get year - initial
console.log(newEBook3) //whole object

// Changing Format
newEBook3.format = 'epub' //success
console.log('EBook format changed to', newEBook3.format) //Get changed format
console.log(newEBook3) //whole object

newEBook3.format = "Hello" //Validation Error
console.log(newEBook3.format) //Get format - initial
console.log(newEBook3) //whole object