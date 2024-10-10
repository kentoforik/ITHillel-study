// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

// Приклад вхідних даних:
// const number = 5;

// Очікуваний результат:
// Copy code

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

import readline from 'readline'

const multiplicationTableWithForLoop = (num) => {

  console.log(`\nMultiplication table with \'For\' loop for number ${num}:`)

  for (let i = 1; i < 11; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

const multiplicationTableWithWhileLoop = (num) => {
  
  console.log(`\nMultiplication table with \'While\' loop for number ${num}:`)

  let i = 1
  while (i < 11) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter any number from 1 to 10 and I will return you a Multiplication table for it: ", (answer) => {
  const numForMultiply = parseInt(answer);

  if (isNaN(numForMultiply) || numForMultiply <= 0 || numForMultiply > 10) {
    console.log('Should enter positive number from 1 to 10.')
  } else {
    multiplicationTableWithForLoop(answer);
    multiplicationTableWithWhileLoop(answer);
  }

  rl.close();
})