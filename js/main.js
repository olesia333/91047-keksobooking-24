import {ARR_LENGTH, generateData} from '/js/data.js';

 /*Создание массива с данными*/
const similarPosts = Array.from({length: ARR_LENGTH}, generateData);
console.log(similarPosts);
