// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

// Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки.

// Створіть змінну averageGrade і присвойте їй середню оцінку студента (від 0 до 100).
// За допомогою конструкції if else, визначте та виведіть у консоль рівень успішності студента:
// Якщо середня оцінка менше 60, вивести "Незадовільно".
// Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
// Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
// Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
// Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".

// Приклад вхідних даних:
// const averageGrade = 85;

// Очікуваний результат:
// Дуже добре

import readline from 'readline';

let averageGrade;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your grade: ", (answer) => {
  averageGrade = parseInt(answer);

  switch (true) {
    case averageGrade => 0 && averageGrade <= 60:
      console.log('Bad');
      break;
    case averageGrade > 60 && averageGrade <= 70:
      console.log('Satisfactorily');
      break;
    case averageGrade > 70 && averageGrade <= 80:
      console.log('Good');
      break;
    case averageGrade > 80 && averageGrade <= 90:
      console.log('Very good');
      break;
    case averageGrade > 90 && averageGrade <= 100:
      console.log('Perfect');
      break;

    default:
      console.log('Grade should be a positive number between 0 and 100');
  }

  rl.close();
})