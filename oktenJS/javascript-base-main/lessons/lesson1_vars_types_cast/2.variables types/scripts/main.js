// // number
// // string
// // boolean

// // var a;
// // a = 'hello okten';

// // {
// //     let a = 'hello okten';
// //     var b = 'hello world';
// // }
// // console.log(b);
// // console.log(a);

// // const PI = 3.14;
// // console.log(PI);
// // // PI = 123;

// // let a = 'ufhgasfdh';
// // console.log(a);
// // a = 'okten';
// // console.log(a);

// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// let time = 40;

// // switch (time) {
// //   case time > 0 && time <= 15:
// //     console.log("first quarter");
// //     break;

// //   case time > 15 && time <= 30:
// //     console.log("second quarter");
// //     break;

// //   case time > 30 && time <= 45:
// //     console.log("third quarter");
// //     break;
// //   case time > 45 && time <= 59:
// //     console.log("fourth quarter");
// //     break;

// //   default:
// //     console.log("error");
// //     break;
// // }
// // for (let i = 0; i < 10; i++) {
// //   document.write(`
// //     <div>hello okten ${i + 1}</div>
// //      `);
// // }
// // let i = 0;
// // while (i < 20) {
// //   document.write(`<h1>hello oknotten ${i + 2}</h1>`);
// //   i += 6;
// // }

// // let listOfItems = [
// //   "html",
// //   "css",
// //   "javascript",
// //   "mysql",
// //   "mongodb",
// //   "react",
// //   "angular",
// //   "node.js",
// // ];

// // document.write("<ul>");

// // for (item of listOfItems) {
// //   document.write(`<li> ${item} </li>`);
// // }

// // document.write("</ul>");

// let products = [
//   {
//     title: "milk",

//     price: 22,

//     image:
//       "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg",
//   },

//   {
//     title: "juice",

//     price: 27,

//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
//   },

//   {
//     title: "tomato",

//     price: 47,

//     image:
//       "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
//   },

//   {
//     title: "tea",

//     price: 15,

//     image:
//       "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
//   },
// ];

// for (let product of products) {
//   document.write(`
//    <div class='product-card'>

//         <h3 class='product-title'> ${product.title} Price – ${product.price}</h3>

//         <img src='${product.image}' alt='' class='product-image'>

//    </div>
//     `);
// }

// let users = [
//   { name: "vasya", age: 31, status: false },

//   { name: "petya", age: 30, status: true },

//   { name: "kolya", age: 29, status: true },

//   { name: "olya", age: 28, status: false },

//   { name: "max", age: 30, status: true },

//   { name: "anya", age: 31, status: false },

//   { name: "oleg", age: 28, status: false },

//   { name: "andrey", age: 29, status: true },

//   { name: "masha", age: 30, status: true },

//   { name: "olya", age: 31, status: false },

//   { name: "max", age: 31, status: true },
// ];

// for (let user of users) {
//   // if (user.status) {
//   //   document.write(`<h1> user: ${user.name}</h1>`);
//   // }

//   if (user.age >= 30) {
//     document.write(`<h1> user: ${user.name}</h1>`);
//   }
// }

// const a = 0;
// const b = 0;

// function areRectangle(a, b) {
//   return a * b;
// }

// console.log(areRectangle(100, 20));

// const r = 0;

// function areRectangle(r) {
//   return Math.PI * r ** 2;
// }

// console.log(areRectangle(10));
// function valumeCylinder(radius, height) {
//   return Math.PI * radius ** 2 * height;
// }

// console.log(valumeCylinder(10, 20));

// function areCylinder(radius, height) {
//   return 2 * Math.PI * radius * (radius + height);
// }

// console.log(areCylinder(10, 20));

// function arrFunchion(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }

// console.log(arrFunchion(["html", "css", "javascript", "mysql"]));

// function makeDiv(text) {
//   // document.write(`<div>${text}</div>`);
//   const div = document.createElement("div"); // створюємо <div>
//   div.textContent = text; // додаємо текст всередину
//   return document.body.appendChild(div); // вставляємо в <body>
// }

// let mekeDiaVar = makeDiv("asd");

// console.log(mekeDiaVar);

// function makeList(text) {
//   const ul = document.createElement("ul"); // створюємо <ul>

//   for (let i = 0; i < 3; i += 1) {
//     const li = document.createElement("li"); // створюємо <li>
//     li.textContent = text; // додаємо текст всередину
//     ul.appendChild(li); // вставляємо <li> в <ul>
//   }
//   return document.body.appendChild(ul); // вставляємо <ul> в <body>
// }

// console.log(makeList("ad11221"));

// function makeList(text, number) {
//   document.write("<ul>");
//   for (let i = 0; i < number; i += 1) {
//     document.write(`<li>${text}</li>`);
//   }
//   document.write("</ul>");
// }
// makeList("ad11123", 6); // не потрібно console.log

// function arrFunchion(array) {
//   for (let item of array) {
//     document.write(`<div>${item}</div>`);
//   }
// }

// console.log(arrFunchion(["html", "css", "javascript", "mysql2"]));

// let users = [
//   { name: "vasya", age: 31, status: false },

//   { name: "petya", age: 30, status: true },

//   { name: "kolya", age: 29, status: true },

//   { name: "olya", age: 28, status: false },

//   { name: "max", age: 30, status: true },

//   { name: "anya", age: 31, status: false },

//   { name: "oleg", age: 28, status: false },

//   { name: "andrey", age: 29, status: true },

//   { name: "masha", age: 30, status: true },

//   { name: "olya", age: 31, status: false },

//   { name: "max", age: 31, status: true },
// ];

// function arrFunchion(arrayObj) {
//   for (let user of arrayObj) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
//   }
// }

// let arrFunchionVar = arrFunchion(users);

// console.log(arrFunchionVar);

// function minNumber(array) {
//   let min = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// }

// let array = [111, 22, 33, 4, 5, -1];

// function minNumber(array) {
//   let min = 0;

//   for (let i = 0; i < array.length; i++) {
//     min += array[i];
//   }
//   return min;
// }

// let array = [111, 22, 33, 4, 5, -100];

// console.log(minNumber(array));

// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   return arr;
// }

// function swap(arr) {
//   let temp = [];

//   for (let item of arr) {
//     temp.unshift(item);
//   }
//   return temp;
// }

// let array = [111, 22, 33, 4, 5, -100];

// console.log(swap(array));

// const letrum = (a, b) => a * b;

// console.log(letrum(10, 30));

// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// let fara = (r) => Math.PI * r ** 2;
// console.log(fara(100));

// #Mbiz5K4yFe7

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

// let scuareCilinder = (r, h) => 2 * Math.PI * r ** 2;

// #SIdMd0hQ

// – створити функцію, яка приймає масив та виводить кожен його елемент //////////////////
// let array = [111, 22, 33, 4, 5, -100];
// let arraItem = (array) => {
//   for (let item of array) {
//     console.log(item);
//   }
// };
// arraItem(array);
// #59g0IsA

// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент------------------------
// let textFun = (text) => {
//   const paragraph = document.createElement("p");
//   paragraph.innerText = text;
//   document.body.appendChild(paragraph);
// };

// textFun("asdasdasdsad ");

// #hOL6126

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий ---------------------

// const textFunctiom = (text) => {
//   const list = document.createElement("ul");
//   // const item = document.createElement("li");

//   for (let i = 0; i < 13; i++) {
//     const li = document.createElement("li");
//     li.innerText = text;
//     list.appendChild(li);
//   }
//   document.body.appendChild(list);
// };

// textFunctiom("123123adsas");

// #0Kxco1edSN

// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

// const textFunctiom = (text, number) => {
//   const list = document.createElement("ul");
//   // const item = document.createElement("li");

//   for (let i = 0; i < number; i++) {
//     const li = document.createElement("li");
//     li.innerText = text;
//     list.appendChild(li);
//   }
//   document.body.appendChild(list);
// };
// textFunctiom("123123adsas", 2);

// #gEFoxMMO

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [111, 22, 33, 4, 5, -100];

// const funArray = (array) => {
//   const list = document.createElement("ul");

//   for (let item of array) {
//     const li = document.createElement("li");
//     li.innerText = item;
//     list.appendChild(li);
//   }
//   document.body.appendChild(list);
// };

// funArray(array);

// #bovDJDTIjt

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.----------
// const obj = [
//   {
//     name: "fff",
//     id: "01",
//     age: "22",
//   },
//   {
//     name: "fff",
//     id: "01",
//     age: "22",
//   },
//   {
//     name: "fff",
//     id: "01",
//     age: "22",
//   },
// ];

// const ObjListFunchion = (obj) => {
//   const div = document.createElement("div");
//   for (let item of obj) {
//     const paragraphName = document.createElement("p");
//     paragraphName.textContent = `name: ${item.name}`;
//     div.appendChild(paragraphName);

//     const paragraphid = document.createElement("p");
//     paragraphid.textContent = `ID: ${item.id}`;
//     div.appendChild(paragraphid);

//     const paragraphAge = document.createElement("p");
//     paragraphAge.textContent = `age: ${item.age}`;
//     div.appendChild(paragraphAge);
//   }

//   document.body.appendChild(div);
// };

// ObjListFunchion(obj);
// // #pghbnSB

// – створити функцію, яка повертає найменше число з масиву

// let array = [111, 22, 33, -400, -5, -10];

// let minFun = (array) => {
//   let min = array[0];

//   for (let num of array) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return console.log(min);
// };

// minFun(array);

// #EKRNVPM

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// const sumFun = (array) => {
//   let sum = 0;
//   for (let num of array) {
//     sum += num;
//   }
//   return console.log(sum);
// };

// sumFun([1, 222, 10, 123, 3123]);

// #kpsbSQCt2Lf

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// const swap = (array) => {
//   let newArray = [];
//   for (let num of array) {
//     newArray.push(num);
//   }

//   return console.log(newArray);
// };

// swap([11, 22, 33, 44], 0, 1);
let str = "hello okten asd1";
// console.log(str.split(" "));
// console.log(str.concat(" asdas12"));
// console.log(str.toUpperCase());
// console.log(str.startsWith("l"));
// console.log(str.substring(0, 3));
// console.log(str.indexOf("o"));
// console.log(str.indexOf("s"));
// console.log(str.indexOf("as"));
// console.log(str.charAt("as"));
// console.log(str.replace("ll", "111"));
// console.log(str);

// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// const makeArray = (string) => {
//   return string.split(" ");
// };

// const newArray = makeArray(str);
// console.log(newArray);

// const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

// const str2 = array.map((item) => item + "");

// console.log(str2);

// const sortNums = (array, direction) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (direction === "ascending") {
//       if (array[i] < array[0]) {
//         newArray.push(array[i]);
//       } else {
//         newArray.unshift(array[i]);
//       }
//     }

//     if (direction === "descending") {
//       if (array[i] > array[0]) {
//         newArray.push(array[i]);
//       } else {
//         newArray.unshift(array[i]);
//       }
//     }
//   }

//   return newArray;
// };

// let nums = [11, 21, 3, 12, 555];

// const sortNums = (array, direction) => {
//   // const newArray = [];

//   if (direction === "ascending") {
//     return array.sort((a, b) => a - b);
//   }

//   if (direction === "descending") {
//     return array.sort((a, b) => b - a);
//   }

//   // return newArray;
// };

// console.log(sortNums(nums, "ascending"));
// console.log(sortNums(nums, "descending"));

// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },

//   { title: "Java Complex", monthDuration: 6 },

//   { title: "Python Complex", monthDuration: 6 },

//   { title: "QA Complex", monthDuration: 4 },

//   { title: "FullStack", monthDuration: 7 },

//   { title: "Frontend", monthDuration: 4 },
// ];

// const ad = coursesAndDurationArray
//   .sort((a, b) => a.monthDuration - b.monthDuration)
//   .filter((value) => value.monthDuration > 5)
//   .map((value, index) => {
//     value.id = index;
//     return value;
//   });

// console.log(ad);

// const createdDiv = document.createElement("div");
// createdDiv.innerText = "lorem asdas asdas";
// createdDiv.classList.add("wrap", "collapse", "alpha", "beta");

// const cloneDiv = createdDiv.cloneNode(true);

// document.body.append(createdDiv, cloneDiv);

// const array = ["asd", "asd1", "ada2"];
// const ul = document.createElement("ul");
// ul.classList.add("list");

// for (let item of array) {
//   const li = document.createElement("li");
//   li.innerText = item;

//   ul.append(li);
// }

// document.body.appendChild(ul);
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },

//   { title: "Java Complex", monthDuration: 6 },

//   { title: "Python Complex", monthDuration: 6 },

//   { title: "QA Complex", monthDuration: 4 },

//   { title: "FullStack", monthDuration: 7 },

//   { title: "Frontend", monthDuration: 1114 },
// ];

// const maineDiv = document.createElement("div");
// maineDiv.classList.add("main");

// for (let item of coursesAndDurationArray) {
//   const div = document.createElement("div");
//   div.classList.add("item");

//   div.innerText = item.title + " - " + item.monthDuration;

//   maineDiv.appendChild(div);
// }

// document.body.appendChild(maineDiv);

// for (let item of coursesAndDurationArray) {
//   const div = document.createElement("div");
//   div.classList.add("item");

// //   div.innerText = item.title + " - " + item.monthDuration;

// //   document.body.appendChild(div);
// // }

// const target12 = document.getElementById("target");
// const inp = document.getElementById("input");
// const form = document.getElementById("form");

// // const targetL = (target.onclick = (evt) => {
// //   console.log(evt);
// // });

// // target.addEventListener("click", (evt) => {
// //   console.log("asdasd");
// // });

// // inp.onInput = function () {
// //   console.log(this.value);
// // };
// form.onsubmit = function (evt) {
//   evt.preventDefault();
//   console.log("asdasd");
//   let user = { name: this.username.value };
// };

// inp.addEventListener("input", (evt) => {
//   console.log(evt.target.value);
//   target12.innerText = this.value;
// });

// window.onload = function () {
//   console.log("loaded");
// };

// document.onreadystatechange = function () {
//   console.log(document.readyState);
// };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// localStorage.setItem("array", JSON.stringify(array));

// const newArray = JSON.parse(localStorage.getItem("array"));
// newArray.push(11);
// console.log(newArray);

// localStorage.setItem("array2", JSON.stringify(newArray));
// localStorage.clear();

// const prodDiv = document.querySelector(".product");
// const product = [
//   {
//     title: "milk",

//     price: 22,

//     image:
//       "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg",
//   },
//   {
//     title: "pilk",

//     price: 222,

//     image:
//       "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg",
//   },
//   {
//     title: "ddilk",

//     price: 12,

//     image:
//       "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg",
//   },
// ];

// for (let item of product) {
//   const productDiv = document.createElement("div");
//   prodDiv.appendChild(productDiv);

//   const title = document.createElement("h3");
//   title.innerText = item.title + " - " + item.price;

//   const img = document.createElement("img");
//   img.src = item.image;

//   const btn = document.createElement("button");
//   btn.innerText = "bay";

//   btn.onclick = function () {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(item);

//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(cart);
//   };

//   productDiv.append(title, img, btn);
// }

const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const delBtn = document.getElementById("closeBtn");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
    <span> task: ${todo}</span>
    <button class="close-btn" id="closeBtn" onclick="deleteTodo(${i})">del</button>
      `;

    todoList.appendChild(li);
  }
}

function addTodo() {
  const inputValume = todoInput.value.trim();

  if (inputValume) {
    todos.push(inputValume);
    todoInput.value = "";
    saveToDo();
    renderTodos();
  }
}

function deleteTodo(index) {
  // closeBtn.addEventListener("click", (evt) => {});
  todos.splice(index, 1);
  saveToDo();
  renderTodos();
}

addBtn.addEventListener("click", (evt) => {
  addTodo();
});

todoInput.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    addTodo();
  }
});

renderTodos();
