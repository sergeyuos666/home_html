// let washNext = function (item) {
//   while (item-- > 0) {
//     console.log("Washing item " + item);
//   }
// };

// washNext(70);

// const numbers = [1, 2, 3, 4, "32gf", "4", 7, 8, "23fg", 10];

// console.log(Math.floor(Math.random() * numbers.length));
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 300, 150);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 50);
// ctx.lineTo(200, 200);
// ctx.bezierCurveTo(200, 300, 50, 300, 50, 200);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "blue";
// ctx.fill("evenodd");

ctx.font = "30px Arial";
ctx.textBaseline = "hanging";
ctx.fillStyle = "black";
ctx.fillText("Hello World", 100, 100);
