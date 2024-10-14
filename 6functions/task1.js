// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function calculateRectDeclaredFunc(width, height) {
  return width * height;
}

const calculateRectExpressedFunc = function (width, height) {
  return width * height;
}

const calculateRectArrowFunc = (width, height) => width * height;

console.log(calculateRectDeclaredFunc(5,10))
console.log(calculateRectExpressedFunc(5,10))
console.log(calculateRectArrowFunc(5,10))