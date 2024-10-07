// Створіть змінну яка буде символізувати вік певної персони.
// Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.
// Виведіть усі змінні в консоль

import readline from 'readline';

let personAge;
let isAdult = false; // Person is NOT adult by default

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter person's age: ", input => {
  personAge = parseInt(input);

  if (isNaN(personAge)) {
    console.log("Person's age should be a number");
  } else {
    isAdult = personAge >= 18 ? "Adult" : "not Adult";
    console.log(`The person is ${isAdult}.`);
  }

  rl.close();
})