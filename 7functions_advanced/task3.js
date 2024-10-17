// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {

  if (denominator === 0 || isNaN(denominator) || isNaN(numerator)) {
    throw new Error('Either denominator equals to zero or one of arguments are not a number');
  }
  return console.log(`The result of deviding ${numerator} by ${denominator} is ${numerator / denominator}`);
}

const data = [[1, 2], [0, 1], [1, 0], ['Hello', 1], [1, 'Hello'], ['Hello', 0], [0, 'Hello']]

for (let item of data) {
  try {
    divide(item[0], item[1])
  } catch (err) { 
    console.log(err)
  }
  finally {
    console.log('Function call is finished \n')
  }
}