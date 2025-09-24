/*
 * Перепишіть конструкцію if за допомогою тернарного оператора
 */

// ✅ Де це доцільно

// let result;

// const a = 1;
// const b = 10;

// result = a + b < 4 ? 'мало' : 'багато';

// console.log(result);

// if (a + b < 4) {
//   console.log('мало');
// } else {
//   console.log('багато');
// }

// const result = a + b < 4 ? console.log('malo') : console.log('bag');

// ❌ Де це недоцільно
// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = 'Директор';

// let message =
//   login === 'Сотрудник'
//     ? 'Привет'
//     : login === 'Директор'
//     ? 'Здравствуйте'
//     : login === ''
//     ? 'Нет логина'
//     : '';

// console.log(message);
