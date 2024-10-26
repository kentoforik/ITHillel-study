// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  {
    name: 'Anton Sustavov',
    email: 'anton.sustavov@gmail.com',
    age: 35
  },
  {
    name: 'Viktor Temnikov',
    email: 'v.temn@gmail.com',
    age: 35
  }
]

for (const user of users) {

  const { name, email, age } = user;

  console.log(`${name} of age ${age} has email ${email}`)
}