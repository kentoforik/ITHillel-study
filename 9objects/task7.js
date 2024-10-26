function deleteKeys(obj, keys) {
  
  const newObj = { ...obj }
  
  keys.forEach(el => {
    delete newObj[el]
  });

  return newObj;
}
export default deleteKeys;


const obj1 = {
  a: 1,
  b: 2
}

const keysArr = ['a']

console.log(deleteKeys(obj1, keysArr))