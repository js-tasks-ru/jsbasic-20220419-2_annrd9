function camelize(str) {
  let splitedStr = str.split('');

  for(let i = 0; i < splitedStr.length; i++) {
      let index = splitedStr.findIndex(item => item === '-');
      let replacement = splitedStr[index + 1].toUpperCase();

      if (index === -1) {
          break;
      }
      splitedStr.splice(index, 2, replacement);
  }
  return splitedStr.join('');
}
