/*
 * Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
 * Гласними є "a", "e", "i", "o", "u".
 */
let voiceLetters = ['a', 'e', 'i', 'o', 'u'];
let counter = 0;

// function findVowels(string) {
//   let arrayString = string.split('');

//   for (let letter of arrayString) {
//     if (voiceLetters.includes(letter)) {
//       counter += 1;
//     }
//   }

//   return counter;
// }

function findVowels(string) {
  for (let letter of string.toLowerCase()) {
    if (voiceLetters.includes(letter)) {
      counter += 1;
    }
  }

  return counter;
}

findVowels('asd sadas dsda jkhgaaaaAAA');

console.log(counter);
