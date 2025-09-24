/*
 * Є масив logins з логінами користувачів. Напиши скрипт додавання логіну до масиву logins. Доданий логін повинен:

* проходити перевірку на довжину від 4 до 16 символів включно
* бути унікальним, тобто відсутнім у масиві logins

* Розбий завдання на підзавдання за допомогою функцій.

* Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи довжина параметра потрапляє в заданий діапазон від 4-х до 16-ти символів включно.

* Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, що додається, як параметри і перевіряє наявність login в масиві allLogins, повертаючи true якщо такого логіну ще немає і false якщо логін вже використовується.

* Напиши функцію addLogin(allLogins, login) яка:

* Приймає новий логін та масив усіх логінів як параметри
* Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
* Якщо логін не валідний, припинити виконання функції addLogin і повернути рядок 'Помилка! Логін має бути від 4 до 16 символів'
* Якщо логін валіден, функція addLogin перевіряє унікальність логіну за допомогою функції isLoginUnique

* Якщо isLoginUnique поверне false, тоді addLogin не додає логін до масиву і повертає рядок 'Такий логін вже використовується!'
* Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
* Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористовувати код і змінювати логіку роботи функції лише в одному місці, не торкаючись роботи програми в цілому.

* Предикатні функції повертають лише true або false. Такі функції прийнято називати з is: isLoginUnique і isLoginValid у нашому випадку.

* isLoginUnique тільки перевіряє, чи є такий логін в масиві і повертає true або false.
* isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
* addLogin додає або не додає логін до масиву. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique та isLoginValid.

 */
//---------------------------------
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const { Profiler } = require('react');

// // Перевіряє, чи логін існує в списку (без урахування регістру)
// function isLoginValid(login) {
//   // if (login.length >= 4 && login.length <= 16) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }

//   return login.length >= 4 && login.length <= 16 ? true : false;
// }

// //яка приймає список всіх логінів і логін, що додається, як параметри і перевіряє наявність
// //login в масиві allLogins, повертаючи true якщо такого логіну ще немає і false якщо логін вже використовується.
// function isLoginUnique(allLogins, login) {
//   const normalizedLogin = login.toLowerCase();
//   const normalizedLogins = allLogins.map(el => el.toLowerCase());

//   return !normalizedLogins.includes(normalizedLogin);
// }

// function addLogin(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return 'Помилка! Логін має бути від 4 до 16 символів';
//   }

//   if (!isLoginUnique(allLogins, login)) {
//     return 'Такий логін вже використовується!';
//   }

//   const a = allLogins.push(login);

//   return a;
// }

// console.log(addLogin(logins, 'Poly'));
// console.log(logins);

// addLogin(logins, 'robotGoogles');
// addLogin(logins, 'Zod');
// addLogin(logins, 'jqueryisextremelyfast');
// // console.log(logins);

//--------------------------------------

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// function isLoginValid(login) {
//   // if (login.length >= 4 && login.length <= 16) {
//   //   return true;
//   // }

//   // return false;

//   return login.length >= 4 && login.length <= 16 ? true : false;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function logMessage(text) {
//   console.log(text);
// }

// function addLogin(allLogins, login) {
//   let message;

//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     message = 'Логін успішно доданий!';
//     allLogins.push(login);
//   } else if (!isLoginUnique(allLogins, login)) {
//     message = 'Такий логін вже використовується!';
//   } else {
//     message = 'Помилка! Логін має бути від 4 до 16 символів';
//   }

//   logMessage(message);
// }

// addLogin(logins, 'Ajax');
// addLogin(logins, 'robotGoogles');
// addLogin(logins, 'Zod');
// addLogin(logins, 'jqueryisextremelyfast');
// console.log(logins);

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElementIndex);
// console.log(lastElement);

// function includes(array, value) {
//   // Change code below this line
//   for (let title of array) {
//     console.log('titile', title);
//     console.log('value', value);
//     if (title === value) {
//       return true;
//     }

//     // return isTrue;
//   }

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
// );
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
// );

// const playList = {
//   name: 'nairo',
//   c1: [1, 2, 3, 4, 5],
//   rating: 1.2,
//   trackCount: 3,
// };

// console.log(playList.rating);

// const pl = 'c1';

// console.log(playList[pl]);

// const userName = 'mango';
// const userEmail = 'mango@h.com';

// const userList = {
//   userName,
//   userEmail: userEmail,
// };

// console.log(userList);

// const userList = {
//   name: 'nairo',
//   cttt: [1, 2, 3, 4, 5],
//   rating: 1.2,
//   trackCount: 3,
//   chngeName(newName) {
//     this.name = newName;
//   },
//   aaddNeC1(value) {
//     this.cttt.push(value);
//   },
// };

// console.log(Object.keys(userList));
// console.log(Object.values(userList));

// const userList = [
//   { name: 'sd1', id: 1 },
//   { name: 'sd2', id: 2 },
//   { name: 'sd3', id: 3 },
// ];

// console.log('keys', Object.keys(userList));
// console.log('values', Object.values(userList));

// let array = [];

// for (const item of userList) {
//   console.log(item);
//   array.push(item.name);
//   console.log(item.name);
// }

// console.log(array);

// const cart = {
//   item: {},
//   getItems() {
//     return this.item;
//   },
//   add(product) {
//     product.quantity = 1;
//   },
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.table(cart.getItems());
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'banana', price: 60 });
// cart.add({ name: 'banana2', price: 600 });
// cart.add({ name: 'banana3', price: 600 });
// cart.add({ name: 'banana4', price: 6000 });

// const userList = [
//   { name: 'sd1', id: 1 },
//   { name: 'sd2', id: 2 },
//   { name: 'sd3', id: 3 },
// ];

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = ['g', 'h', 'i'];

// const allArray = array1.concat(array2, array3);
// console.log(allArray);

// const newArray = [...array1, ...array2, ...array3];
// console.log(allArray);

// const userList = {
//   name: 'sd1',
//   name: 'sd2',
//   name: 'sd3',
//   name: 'sd4',
//   name: 'sd5',
// };

// const entries = Object.entries(userList);

// // console.log(entries);

// for (const entry of entries) {
//   const [name, id] = entry;
//   console.log(name, id);
// }

// const profile = {
//   name: 'nairo',
//   cttt: [1, 2, 3, 4, 5],
//   rating: 1.2,
//   avatar: 3,
//   stats: {
//     folowers: 1000,
//     views: 2000,
//     likes: 3000,
//   },
// };

// const { name, rating, cttt, ...restProps } = profile;
// const xx = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };

// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
//   const { name, cttt, rating, ...RestProps } = userProfile;

//   console.log(rating);
// };

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items);

    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      let { name } = items[i];

      if (name === productName) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (let { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana', price: 60 });
cart.add({ name: 'banana2', price: 600 });
cart.add({ name: 'banana3', price: 600 });
cart.add({ name: 'banana3', price: 600 });
cart.add({ name: 'banana3', price: 600 });

// cart.remove('banana2');

// cart.clear();

cart.countTotalPrice();
console.table(cart.getItems());
console.table(cart.countTotalPrice());
