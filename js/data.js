import {getRandomIntegerNumber, getRandomFloat, getRandomArray, getRandomArrayIntegerNumber} from '/js/utils.js';

/*Количество объектов в массиве*/
const ARR_LENGTH = 10;
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

/*Генерация массива, из которого будут браться номера изображений аватарок*/
const USER_PIC = [];

/*Заполнение массива аватарок случайными числами */
getRandomArrayIntegerNumber(USER_PIC, ARR_LENGTH);

/*Функция создания объекта Автор*/
const createAuthor = () => {
  const numericAvatar= USER_PIC.splice(getRandomIntegerNumber(0, USER_PIC.length-1), 1);
  return {
    avatar: `img/avatars/user${numericAvatar < 10 ? `0${numericAvatar}` : numericAvatar}.png`,
  };
};

/*Функция создания объекта Локация*/
const createLocation = () => ({
  lat: getRandomFloat(35.65, 35.7, 5),
  lng: getRandomFloat(139.7, 139.8, 5),
});

/*Функция генерации данных*/
const generateData = () => {
  const author = createAuthor();
  /*let offer = createOffer();*/
  const location = createLocation();
  return {
    author,
    offer: {
      title: 'Объявление об аренде',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomIntegerNumber(100, 1500),
      type: TYPE_OF_HOUSE[getRandomIntegerNumber(0,(TYPE_OF_HOUSE.length-1))],
      rooms: getRandomIntegerNumber(1, 10),
      guests: getRandomIntegerNumber(1, 15),
      checkin: TIME[getRandomIntegerNumber(0,(TIME.length-1))],
      checkout: TIME[getRandomIntegerNumber(0,(TIME.length-1))],
      features: getRandomArray(FEATURES),
      description: 'Удобное расположение. В шаговой доступности: магазины, рестораны и места для занятий спортом',
      photos: PHOTOS[getRandomIntegerNumber(0,(PHOTOS.length-1))],
    },
    location,
  };
};

export {ARR_LENGTH, generateData};
