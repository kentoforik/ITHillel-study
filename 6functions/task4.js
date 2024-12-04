//just additional practice with functions


//simple ...rest
const arrayFromNumbers = (...numbers) => numbers.map(el => el * 2);

console.log('Array of numbers, mutliplied by 2: ', arrayFromNumbers(1, 2, 3))


// ...rest + 1 arg
const arrayFromNumbersMult = (multiplicator, ...numbers) => {
  return numbers.map(el => el * multiplicator);
}

console.log('Array of numbers, mutliplied by provided argument: ', arrayFromNumbersMult(2, 1, 2, 3))

// default arg + ...rest
function defaultName(name = "Pavlo", ...rest) {
  const names = [name];
  for (const name of rest) {
    names.push(name)
  }
  return names;
}

console.log('Array of names, populated with default name: ', defaultName())
console.log('Array of names, populated with arguments: ', defaultName("Vlad", "Pavlo", "Anton"))
