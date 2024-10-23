// Вам потрібно створити програму, яка відфільтровує парні числа з масиву.

// Ось кроки, які вам потрібно виконати:

// Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
let randomArr = []
for (let i = 0; i < 10; i++) {
  randomArr.push(Math.floor(Math.random() * 10 - 5))
}

// Cтворіть новий масив, який міститиме лише парні числа.
const evenFilteredArr = randomArr.filter(el => el % 2 === 0)

// Виведіть отриманий масив парних чисел на консоль.
console.log(randomArr)
console.log(evenFilteredArr)