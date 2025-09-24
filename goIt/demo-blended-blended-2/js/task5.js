/*
 * Створи функцію getLargestExpressionResult, яка приймає
 два числа a та b і повертає найбільший можливий результат серед виразів:
a + b
a — b
a * b
a / b
 */
let arr = [];
let max = 0;

function getLargestExpressionResult(a, b) {
  let res1 = a + b;
  let res2 = a - b;
  let res3 = a * b;
  let res4 = a / b;
  console.log(res3);

  arr.push(res1);
  arr.push(res2);
  arr.push(res3);
  arr.push(res4);

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log('asd', max);

console.log(getLargestExpressionResult(12, 40));
