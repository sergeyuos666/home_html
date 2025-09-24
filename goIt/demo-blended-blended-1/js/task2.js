/*
 * Волонтери розділені на 5 груп з рівною кількістю людей у кожній. 
Якщо в будь-якій групі по 5 осіб, то для відновлення кількості необхідно набрати ще волонтерів.
 Напишіть програму, яка бере фактичну кількість волонтерів як вступні дані і виводить 
 у консоль кількість волонтерів, яку необхідно найняти, щоб у всіх 5 групах їх було порівну.
 */

// const volunteers = 46; // Фактична кількість волонтерів
// const grup = 5; // Кількість груп

// const volunteersInGrup = Math.ceil(volunteers / grup);
// const totalVolunteersNeeded = volunteersInGrup * grup - volunteers;

// if (volunteersInGrup === 5 && volunteers % grup === 0) {
//   console.log('Всі групи заповнені, нових волонтерів не потрібно.');
// } else {
//   console.log(`Всі групи заповнені, нових волонтерів ${totalVolunteersNeeded}`);
// }

// if (volunteers % 5 === 0) {
//   console.log('Всі групи заповнені, нових волонтерів не потрібно.');
// } else {
//   console.log(`нада ${5 - (volunteers % 5)}`);
// }

// const volunteersPerGroup = Math.ceil(volunteers / grup); // Кількість волонтерів в кожній групі
// const totalVolunteersNeeded = volunteersPerGroup * grup - volunteers; // Загальна кількість волонтерів, необхідна для заповнення груп

// if (volunteersPerGroup === 5 && volunteers % grup === 0) {
//   console.log('Всі групи заповнені, нових волонтерів не потрібно.');
// } else {
// //   console.log(`Всі групи заповнені, нових волонтерів ${totalVolunteersNeeded}`);
// }
