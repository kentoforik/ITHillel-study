// У вас є вихідний масив
// сonst numbersList = [1,10,14,2,4,5,43,34]
let randomArr = []
for (let i = 0; i < 10; i++) {
  randomArr.push(Math.floor(Math.random() * 10 - 5))
}

// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
const filteredArr = [...randomArr].sort((a, b) => a - b)

// Виведіть обидва масиви в консоль
console.log(randomArr)
console.log(filteredArr)