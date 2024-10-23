// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

function handleNum(num, isEven, isOdd) {
  return (num % 2 == 0 ? isEven() : isOdd())
}

const handleEven = () => console.log('The number is even')

const handleOdd = () => console.log('The number is odd')

handleNum(-1, handleEven, handleOdd)
handleNum(0, handleEven, handleOdd)
handleNum(1, handleEven, handleOdd)
handleNum(2, handleEven, handleOdd)