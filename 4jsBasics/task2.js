// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const teacher = "Vlad";
const student = "Pavlo";

const group = "On the beginning of each lesson, teacher " + teacher + " welcomes " + student + " and other students!";

const groupMocked = `On the beginning of each lesson, teacher ${teacher} welcomes ${student} and other students!`

console.log(group)
console.log(groupMocked)

