// Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.

// Ось кроки, які вам потрібно виконати:

// Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
let randomArr = []
for (let i = 0; i < 10; i++) {
  randomArr.push(Math.floor(Math.random() * 10 - 5))
}

// Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
const arraySum = randomArr.reduce((accumulator, currentValue) => accumulator + currentValue)

// Виведіть отриману суму на консоль.
console.log(randomArr)
console.log(arraySum)