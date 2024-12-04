// Вам потрібно створити програму, яка об'єднає два масиви в один

// Ось кроки, які вам потрібно виконати:

// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
const randomArr1 = []
for (let i = 0; i < 5; i++) {
  randomArr1.push(Math.floor(Math.random() * 10 - 5))
}

const randomArr2 = []
for (let i = 0; i < 5; i++) {
  randomArr2.push(Math.floor(Math.random() * 10 - 5))
}

// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
const jointArr = randomArr1.concat(randomArr2) 

// Виведіть отриманий об'єднаний масив на консоль.
console.log('arr1:', randomArr1)
console.log('arr2:', randomArr2)
console.log('Two arrays, joint together:', jointArr)