// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Перевизначте метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import { Book, bookExamples } from './task1.js'

export class EBook extends Book {
  constructor(title, author, publishYear, fileFormat) {
    super(title, author, publishYear);
    this._fileFormat = fileFormat;
  }

  printInfo() {
    console.log(`The ${this._title} book by ${this._author} was published in ${this._publishYear}. \n The file format of electronic book is ${this._fileFormat}.`)
  }
}

export const fileFormats = ['pdf', 'epub', 'fb2']

export const elBooks = bookExamples.map(el => {
  const randomFileFormatIndex = Math.round(Math.random() * 2)
  el.format = fileFormats[randomFileFormatIndex]
  return el
})

function printEBooks(elBooks) {
  elBooks.forEach((el) => {
    const elBook = new EBook(el.title, el.author, el.year, el.format)
    elBook.printInfo()
  })
}

//printEBooks(elBooks); //commented in order to NOT execute on import to task3.