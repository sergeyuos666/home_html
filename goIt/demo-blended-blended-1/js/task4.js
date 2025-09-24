/*
 * Напиши скрипт, який просить відвідувача ввести число у prompt до тих пір, поки відвідувач натисне Cancel та щоразу додає введене значення до загальної суми.

 * При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення додається до значення змінної total.

 * Операція введення числа триває доти, доки користувач не натисне кнопку Cancel у prompt.

 * Після того, як користувач припинив введення, натиснувши кнопку Cancel, показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
 * Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно. Якщо хочеш, у разі некоректного введення, показуй alert з текстом 'Було введено не число, спробуйте ще раз', при цьому результат prompt плюсувати до загальної суми не потрібно, після чого користувачеві знову пропонується ввести число в prompt.
 */

// const inputNumber = prompt();
// let total = 0;
// alert(`Загальна сума чисел дорівнює ${total}`);

// for (inputNumber !== null; inputNumber === false; inputNumber += 1) {
//   if (isNaN(inputNumber)) {
//     alert('Було введено не число, спробуйте ще раз');
//   } else {
//     alert = `total - ${(total += Number(inputNumber))}`;
//   }
//   inputNumber = prompt('веведіть число');
// }

// for (inputNumber !== null; inputNumber === false; inputNumber += 1) {
//   if (isNaN(inputNumber)) {
//     alert('Було введено не число, спробуйте ще раз');
//   } else {
//     alert = `total - ${(total += Number(inputNumber))}`;
//   }
//   inputNumber = prompt('веведіть число');
// }

// let total = 0;
// let input;

// while (true) {
//   input = prompt('Введіть число');

//   if (input === null) {
//     // Користувач натиснув Cancel
//     break;
//   }

//   if (isNaN(input)) {
//     alert('Було введено не число, спробуйте ще раз');
//     continue;
//   }

//   total += Number(input);
// }

// alert(`Загальна сума чисел дорівнює ${total}`);
// let total = 0;

// for (;;) {
//   let input = prompt('Введіть число');

//   if (input === null) {
//     // Користувач натиснув Cancel
//     break;
//   }

//   if (isNaN(input)) {
//     alert('Було введено не число, спробуйте ще раз');
//     continue;
//   }

//   total += Number(input);
// }

// alert(`Загальна сума чисел дорівнює ${total}`);

// if (inputNumber === false) {
//   alert(`Загальна сума чисел дорівнює ${total}`);
// } else {
//   console.log((total = total + Number(inputNumber)));
// // }
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (promptUser !== null; promptUser === false; promptUser += 1) {
//   if (promptUser === null) {
//     alert(`Загальна сума чисел дорівнює ${total}`);
//   } else {
//     const promptUser = prompt();
//     total = total + promptUser;
//     console.log(total);
//   }
// }

let input;
let total = 0;

while (true) {
  input = prompt('nuber bigom', 0);

  if (isNaN(Number(input))) {
    alert('neeeee');
    continue;
  }

  if (input === null) break;

  total += Number(input);
}

console.log(`Загальна сума чисел дорівнює ${total}`);
