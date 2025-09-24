/*
 * Дано рядок, що складається із символів, наприклад, '  abcde '. 
Перевірте, що першим символом цього рядка є буква 'a'. Якщо це так - виведіть 'так', інакше - виведіть 'ні'.
 
 */
// const string = 'a  abcde ';

// if (string.includes('n')) {
//   console.log('tak');
// } else {
//   console.log('no');
// }

// if (string.charAt(0) === 'a') {
//   console.log('tak');
// } else {
//   console.log('no');
// }

// if (string.trim().charAt(0) === 'a') {
//   console.log('tak');
// } else {
//   console.log('no');
// }
const string = 'ab  abcde ';
const check = string[0].includes('a') ? console.log('yes') : console.log('no');

if (string.charAt(0) === 'a') {
  console.log('tak2');
} else {
  console.log('no2');
}

if (string.startsWith('a')) {
  console.log('tak3');
} else {
  console.log('no3');
}

if (string.trim().charAt(0) === 'a') {
  console.log('tak4');
} else {
  console.log('no4');
}
