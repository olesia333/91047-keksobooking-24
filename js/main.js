/*Функция генерации случайного числа между мин и мах */
function getRandomInclusive(min, max) {
  return Math.random() * (max - min) + min;
}

/*Функция валидации случайного числа */
function checkValidity(checkNumber) {
  if (checkNumber > 0 || checkNumber==0) {
    return checkNumber;
  }
  throw new Error('Ошибка: число '+checkNumber+' - не соответствие условию.');
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

/*Количество объектов в массиве*/
const ARR_LENGTH = 10;

/*Генерация массива, из которого будут браться номера изображений аватарок*/
let USER_PIC = [];

/*Функция, которая будет генерировать случайные числа, не повторяясь*/
function getRandomArrayIntegerNumber (array, count) {
  if (array.length >= count) return array;
  let newNumber = getRandomIntegerNumber(0, count)+1;
  if (array.indexOf(newNumber) < 0) {
    array.push(newNumber);
  }
  getRandomArrayIntegerNumber (array, count);
};

/*Заполнение массива аватарок случайными числами */
getRandomArrayIntegerNumber(USER_PIC, ARR_LENGTH);

/*Функция создания объекта Автор*/
const createAuthor = () => {
  numericAvatar= USER_PIC.splice(getRandomIntegerNumber(0, USER_PIC.length-1), 1);
  return {
    avatar: `img/avatars/user${numericAvatar < 10 ? `0${numericAvatar}` : numericAvatar}.png`,
  };
};


const TYPE_OF_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

/*Функция генерации массива случайных чисел*/
const getRandomArray = (array) => array.slice(0, getRandomIntegerNumber(1, array.length));

/*Функция создания объекта Автор*/
const createOffer = () => {
  return {
    title: 'Объявление об аренде',
    address: `${location.lat}, ${location.lng}`,  /*Не работает маска для address*/
    price: getRandomIntegerNumber(100, 1500),
    type: TYPE_OF_HOUSE[getRandomIntegerNumber(0,(TYPE_OF_HOUSE.length-1))],
    rooms: getRandomIntegerNumber(1, 10),
    guests: getRandomIntegerNumber(1, 15),
    checkin: TIME[getRandomIntegerNumber(0,(TIME.length-1))],
    checkout: TIME[getRandomIntegerNumber(0,(TIME.length-1))],
    features: getRandomArray(FEATURES),
    description: 'Удобное расположение. В шаговой доступности: магазины, рестораны и места для занятий спортом',
    photos: PHOTOS[getRandomIntegerNumber(0,(PHOTOS.length-1))],
  };
};

/*Функция создания объекта Локация*/
const createLocation = () => {
  return {
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5),
  };
};

/*Функция генерации данных*/
const generateData = () => {
  let author = createAuthor();
  let offer = createOffer();
  let location = createLocation();
  return {
    author,
    offer,
    location
  }
}

 /*Создание массива с данными*/
const similarPosts = Array.from({length: ARR_LENGTH}, generateData);
console.log(similarPosts);
