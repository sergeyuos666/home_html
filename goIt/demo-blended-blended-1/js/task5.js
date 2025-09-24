/*
 * У змінній min лежить число від 0 до 59.Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
 */
const min = 59;
const time = 60;
const quarter = time / 4;

if (min >= 0 && min < quarter) {
  console.log('1');
} else if (min >= quarter && min < quarter * 2) {
  console.log('2');
} else if (min > quarter * 2 && min < quarter * 3) {
  console.log('3');
} else if (min > quarter * 3 && min < quarter * 4) {
  console.log('4');
}

// if (min >= 0 && min < quarter) {
//   console.log('Перша чверть години');
// } else if (min >= quarter && min < quarter * 2) {
//   console.log('Друга чверть години');
// } else if (min >= quarter * 2 && min < quarter * 3) {
//   console.log('3 чверть години');
// } else if (min >= quarter * 3 && min < time) {
//   console.log('Четверта чверть години');
// }
