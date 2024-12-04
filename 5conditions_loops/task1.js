// Завдання 1: Визначення рівня успішності студента

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

function gradeAssessment(num) {
  if (isNaN(num) || num < 0 || num > 100) {
    console.log('Grade should be a positive number between 0 and 100');
  } else if (num <= 60) {
    console.log('Bad');
  } else if (num > 60 && num <= 70) {
    console.log('Satisfactorily');
  } else if (num > 70 && num <= 80) {
    console.log('Good');
  } else if (num > 80 && num <= 90) {
    console.log('Very good');
  } else if (num > 90)
    console.log('Perfect');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your grade: ", (answer) => {
  const averageGrade = parseInt(answer);

  gradeAssessment(averageGrade);

  rl.close();
})