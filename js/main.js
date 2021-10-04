function getRandomInclusive(min, max) {
  return Math.random() * (max - min) + min;
}

function checkValidity(checkNumber) {
  if (checkNumber > 0 || checkNumber==0) {
    return checkNumber;
  }
  throw new Error('Ошибка: число '+checkNumber+' - не соответствие условию.');
}

function getRandomIntegerNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandomInclusive(checkValidity(min), checkValidity(max)));
}

function getRandomFloat(min, max, dec) {
  dec = Math.floor(dec);
  return getRandomInclusive(checkValidity(min), checkValidity(max)).toFixed(checkValidity(dec));
}

console.log(getRandomIntegerNumber(0, 10));
console.log(getRandomFloat(1.1, 1.15, 8));
