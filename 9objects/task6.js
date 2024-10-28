function isObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects are empty
  if (keys1.length === 0 && keys2.length === 0) return true;

  // Check if number of keys are the same
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    // Check if key exists in obj2 and types are the same
    if (!obj2.hasOwnProperty(key) || typeof obj1[key] !== typeof obj2[key]) {
      return false;
    }

    // Check for equality or case-insensitive string equality
    if (obj1[key] !== obj2[key] &&
        typeof obj1[key] === 'string' &&
        typeof obj2[key] === 'string') {
      if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const a = {
  a: 1,
  b: 'hello'
}

const b = {
  a: 1,
  b: 'hello'
}

const c = {
  a: 1,
  b: 'Hello'
}

const d = {
  a: 2,
  b: 'hello'
}

const e = {
  a: 1,
  b: 'hello',
  c: true
}

const f = {
  a: '1',
  b: 'hello',
}
const g = {
  a: 1,
  b: '1hello1'
}

const h = {}
const j = {}




console.log(isObjectsEqual(a, b))
console.log(isObjectsEqual(a, c))
console.log(isObjectsEqual(a, d))
console.log(isObjectsEqual(a, e))
console.log(isObjectsEqual(a, f))
console.log(isObjectsEqual(a, g))
console.log(isObjectsEqual(h, j))