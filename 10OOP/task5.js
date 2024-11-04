// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

import { Book, bookExamples } from './task1.js';
import { EBook, fileFormats } from './task2.js';

class BookToEbook extends Book {
  static convertBookToEbook(BookInstance, format) {
    if (!(BookInstance instanceof Book) || !fileFormats.includes(format)) {
      console.log('Book is NOT an instance of class Book or file format is wrong.')
    }
    return new EBook(BookInstance._title, BookInstance._author, BookInstance._publishYear, format)
  }
}

//Valid instance creation
const validBook = new Book(bookExamples[0].title, bookExamples[0].author, bookExamples[0].year)
console.log(BookToEbook.convertBookToEbook(validBook, 'epub'))

//Validation error for instance of class Book
BookToEbook.convertBookToEbook(bookExamples[1].title, bookExamples[1].author, bookExamples[1].year, 'fb2')

//Validation error for file format
const book2 = new Book(bookExamples[2].title, bookExamples[2].author, bookExamples[2].year)
BookToEbook.convertBookToEbook(book2, 'hello')


