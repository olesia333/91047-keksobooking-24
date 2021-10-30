/*Функция генерации случайного числа между мин и мах */
function getRandomInclusive(min, max) {
  return Math.random() * (max - min) + min;
}

/*Функция валидации случайного числа */
function checkValidity(checkNumber) {
  if (checkNumber > 0 || checkNumber===0) {
    return checkNumber;
  }
  throw new Error(checkNumber);
}

/*Функция генерации случайного ЦЕЛОГО числа */
function getRandomIntegerNumber(min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  return Math.floor(getRandomInclusive(checkValidity(min), checkValidity(max)));
}

/*Функция генерации случайного числа С ПЛАВАЮЩЕЙ ТОЧКОЙ*/

function getRandomFloat(min, max, dec) {
  dec = Math.floor(dec);
  return getRandomInclusive(checkValidity(min), checkValidity(max)).toFixed(checkValidity(dec));
}

/*Функция, которая будет генерировать случайные числа, не повторяясь*/
function getRandomArrayIntegerNumber (array, count) {
  if (array.length >= count) {
    return array
  }
  const newNumber = getRandomIntegerNumber(0, count)+1;
  if (array.indexOf(newNumber) < 0) {
    array.push(newNumber);
  }
  getRandomArrayIntegerNumber (array, count)
}

/*Функция генерации массива случайных чисел*/
const getRandomArray = (array) => array.slice(0, getRandomIntegerNumber(1, array.length));

export {getRandomIntegerNumber, getRandomFloat, getRandomArrayIntegerNumber, getRandomArray};
