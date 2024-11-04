// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function consoleLog(text, timeout) {
  if (typeof text !== 'string' || typeof timeout !== 'number' || timeout < 0) {
    console.log('Provided text should be a string and timeout should be a positive number.')
  } else {
    setTimeout(() => console.log(text), timeout)
  }
}

consoleLog("Hello", 1000)