/*
 * Ставка податку залежить від розміру твого доходу:
 * якщо дохід до 1000 грн. включно — податок 2%;
 * якщо дохід від 1000 грн. до 10000 грн. включно — податок 3%;
 * якщо дохід більший за 10000 грн — податок 5%;
 */

// const salary = 102300;
// let tax = 0;

// if (salary <= 1000) {
//   tax = salary * 0.02;
//   console.log(tax);
// } else if (salary > 1000 && salary < 10000) {
//   tax = salary * 0.03;
//   console.log(tax);
// } else if (salary >= 10000) {
//   tax = salary * 0.05;
//   console.log(tax);
// }
let salary = 10000;

if (salary <= 1000) {
  salary = salary * 0.02;
} else if (salary > 1000 && salary < 10000) {
  salary = salary * 0.03;
} else {
  salary = salary * 0.05;
}

console.log(salary);
