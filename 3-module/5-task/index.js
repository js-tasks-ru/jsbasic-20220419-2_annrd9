function getMinMax(str) {
  let splitted = str
  .split(' ')
  .filter(num => isFinite(num));

  let numbers = splitted.map(num => +num);

  let result = {};
  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  
  return result;
}
