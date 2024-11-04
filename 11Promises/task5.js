// Імплементуйте функцію checkNumber, яка перевіряє, чи передане число менше 10 і повертає Promise. Якщо число менше 10, функця має повернути Promise що вирішується успішно і повертає рядок "Success", в іншому випадку - Promise має бути відхилений та повернути інстанс класу Error з повідомленням"Failure"

function checkNumber(num) {
  return new Promise(
    (resolve, reject) =>
      num < 10
        ? resolve('Success')
        : reject(new Error('Failure'))
  )
}

checkNumber(11).then(result => console.log(result)).catch(err => console.log(err))
checkNumber(10).then(result => console.log(result)).catch(err => console.log(err))
checkNumber(0).then(result => console.log(result)).catch(err => console.log(err))
checkNumber(-1).then(result => console.log(result)).catch(err => console.log(err))

