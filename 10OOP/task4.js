// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

import { Book, bookExamples } from './task1.js'
import { elBooks } from './task2.js';

class BookExtendedGetOldest extends Book {
  static getOldestBook(booksArray) {
    return (booksArray.map((el) => el.year || el._publishYear).sort((a, b) => a - b))[0]
  }
}

const booksArr = bookExamples.map(element => {
  return new Book(element.title, element.author, element.year)
});

// Invocation for a simple object
console.log(BookExtendedGetOldest.getOldestBook(bookExamples))

// Invocation for Book class instances
console.log(BookExtendedGetOldest.getOldestBook(booksArr))

// Invocation for EBook class instances
console.log(BookExtendedGetOldest.getOldestBook(elBooks))

// Invocation for random classes instances
const randomBooks = [bookExamples[0], booksArr[1], elBooks[2], bookExamples[1]]
console.log(BookExtendedGetOldest.getOldestBook(randomBooks)) 
