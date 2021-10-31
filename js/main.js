import {ARR_LENGTH, generateData} from '/js/data.js';

/*Создание массива с данными*/
const similarPosts = Array.from({length: ARR_LENGTH}, generateData);
// eslint-disable-next-line no-console
console.log(similarPosts); /*Почему появляется ошибка на console.log*/
