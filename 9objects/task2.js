// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
  title: "Clean code and patterns of projecting",
  author: "Robert Martin",
  year: 2008,
}

const { title, author } = book;

console.log(`The book ${title} is written by ${author}`)