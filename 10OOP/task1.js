// Створіть клас "Книга" (Book) з захищеними властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

export class Book {
  constructor(title, author, publishYear) {
    this._title = title;
    this._author = author;
    this._publishYear = publishYear;
  }

  printInfo() {
    console.log(`The ${this._title} book by ${this._author} was published in ${this._publishYear}.`)
  }
}

export const books = [
  { title: "\"I, Robot\"", author: "Isaac Asimov", year: "1950" },
  { title: "\"Fahrenheit 451\"", author: "Ray Bradbury", year: "1953" },
  { title: "\"Dune\"", author: "Frank Herbert ", year: "1965" },
]

function printBooks(books) {
  books.forEach((el) => {
    const book = new Book(el.title, el.author, el.year)
    book.printInfo()
  })
}

// printBooks(books);  //commented in order to NOT execute on import to task2.