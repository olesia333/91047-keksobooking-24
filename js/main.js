function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

function checkValidity(checkNumber) {
  return (checkNumber < 0) ? console.log("Ошибка ввода: число должно быть > 0") : true;
};

function getRandomIntegerNumber(min, max) {
  if (checkValidity(min) && checkValidity(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(getRandomInclusive(min, max));
  }
}

function getRandomFloatNumber(min, max, decimalPlaces) {
  decimalPlaces = Math.ceil(decimalPlaces);
  if (checkValidity(min) && checkValidity(max) && checkValidity(decimalPlaces)) {
    console.log(getRandomInclusive(min, max).toFixed(decimalPlaces));
  }
}

getRandomIntegerNumber(0, 20);
getRandomFloatNumber(1.2, 3, 2);
