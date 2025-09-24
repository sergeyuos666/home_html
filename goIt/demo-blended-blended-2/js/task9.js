/*
 * Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково читається
 як у звичному напрямку, так і у зворотному. Наприклад, "Anna" - це паліндром, а "table" і
  "John" - ні.
 * Даний рядок; потрібно написати функцію, яка дозволяє повернути значення true, 
 якщо рядок є паліндром, і false - якщо ні. При цьому потрібно враховувати прогалини та 
 розділові знаки.
 */

// function polindrome(string) {
//   const normalazeString = string.toLowerCase().trim()
// let newArray = normalazeString.split('');
//   let newString = '';

//   for (let i = newArray.length - 1; i >= 0; i--) {
//     newString += newArray[i];
//     console.log(newString);
//   }

//   if (newString === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

function polindrome(string) {
  const normalazeString = string.toLowerCase().trim();

  return normalazeString === normalazeString.split('').reverse().join('');
}

console.log(polindrome('adda'));
console.log(polindrome('zdda'));
