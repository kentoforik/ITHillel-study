// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
// Приклад виводу на консоль:

// Кількість позитивних чисел: 3
// Кількість негативних чисел: 2
// Кількість нульових чисел: 2

// Ваша програма повинна коректно підрахувати та вивести кількість позитивних, негативних та нульових чисел в заданому масиві.

const numbers = [];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

//create random array
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10 - 5))
}

for (const el of numbers) {
  if (el === 0) {
    zeroCount++;
    continue;
  }
  el > 0 ? positiveCount++ : negativeCount++
}


console.log(`Within the array ${numbers}, there are: \n${positiveCount} positive numbers \n${negativeCount} negative numbers \n${zeroCount} numbers equal to zero`)