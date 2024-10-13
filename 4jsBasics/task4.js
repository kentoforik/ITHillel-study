//Task 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const circleArea = (radius) => {
  let circleRadius = radius;

  console.log(`\nThe circle area with radius ${circleRadius} is ${Math.PI * Math.pow(circleRadius, 2)} \n`);
}

//Task 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

const rectArea = (length, width) => {
  let rectLength = length;
  let rectWidth = width;

  console.log(`The rectangle area with length ${rectLength} and width ${rectWidth} is: ${rectLength * rectWidth}`)

}

//Task 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const cylinderVolume = () => {
  let radius = 100;
  let height = 7;

  console.log(`
  The cylinder with: 
  radius ${radius} 
  and height ${height} 
  has a volume of ${(Math.PI * Math.pow(radius, 2) * height).toFixed(2)}.
  `)
}

circleArea(3);
rectArea(5, 7);
cylinderVolume();
