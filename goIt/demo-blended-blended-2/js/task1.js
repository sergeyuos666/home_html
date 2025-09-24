/*
 * Рубрика 'wtf!?' або "Що покаже консоль?"
 */

// function a(value) {
//   return true - value;
// }

// const b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);

// const numbers = [17, 2222, 94, 11, 3];
// let min = numbers[0];
// let max = numbers[0];

// for (let number of numbers) {
//   if (number < min) {
//     min = number;
//     continue;
//   } else if (max < number) {
//     max = number;
//   }
// }

// console.log(min);
// console.log(max);

// const numbers = ['17', '2222', '94', '11', '3'];

// let string = '';
// for (const number of numbers) {
//   string += number + ', ';
// }

// string = string.slice(0, string.length - 2);

// const string = numbers.join(',-');
// console.log(string);

// const string = 'ASDascxAASD';
// const letters = string.split('');
// let inverString = '';

// for (const letter of letters) {
//   // if (letter === letter.toLowerCase()) {
//   //   inverString += letter.toUpperCase();
//   // } else if (letter === letter.toUpperCase()) {
//   //   inverString += letter.toLowerCase();
//   // }

//   inverString +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();

//   console.log(inverString);
// }

// console.log(inverString);

// for (let bukva of string) {
//   const bukva2 = bukva;

//   if (bukva2 !== bukva2.toUpperCase()) {
//     ggg = ggg + bukva2.toUpperCase();
//   } else if (bukva2 !== bukva2.toLowerCase()) {
//     ggg = ggg + bukva2.toLowerCase();
//   }
//   console.log(ggg);
// }

// const title = 'Top 10 mer of Rev';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// console.log(words);

// const slag = words.join('-');
// console.log(slag);

// // var2
// const slag1 = title.toLowerCase().split(' ').join('-');
// console.log(slag1);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// let total = 0;

// var 1 bed

// for (let i = 0; i < array1.length; i += 1) {
//   total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//   total += array2[i];
// }

// console.log(total);

// var 2
// const numbers = array1.concat(array2);
// for (const num of numbers) {
//   total += num;
// }

// console.log(total);

// const cards = ['r1', 'r2', 'r3', 'r42', 'r12'];

// const cardToRemove = 'r42';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);

// const cardToInsert = 'r3';
// const index2 = cards.indexOf(cardToInsert);
// cards.splice(index2, 0, 'r6', 'r7');

// const cardToUpdate = 'r3';
// const index3 = cards.indexOf(cardToUpdate);
// cards.splice(index3, 1, 'r6888');

// console.log(cards);
