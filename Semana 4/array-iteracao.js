const users = ["joao", "tiago", "luka", "rodrigo"];

for (let index = 0; index < users.length; index++) {
  const element = users[index];
}

// foreach

users.forEach((user, index) => console.log(user, index));

// map

const arrayNumbers = [1, 5, 7, 2, 9];
// for (let index = 0; index < arrayNumbers.length; index++) {
//   arrayNumbers[index] = arrayNumbers[index] * 10;
// }

const result = arrayNumbers.map((number) => number * 10);

// console.log(result);

// filter

const users2 = [
  { name: "João", role: "Professor", id: 2 },
  { name: "Juca", role: "Estudante", id: 10 },
  { name: "Márcia", role: "Estudante", id: 1 },
  { name: "Pedro", role: "Estudante", id: 3 },
  { name: "Matheus", role: "Professor", id: 99 },
  { name: "Júlia", role: "Estudante", id: 4 },
];

const students = users2.filter((user) => user.role === "Estudante");

// console.log(students);

const numbers = [-8, 12, 76, 100, -230, -7, 120];

const negativeNumbers = numbers.filter((number) => number < 0);
// console.log(negativeNumbers);

// find

const found = users2.find((user) => user.name === "João");
// console.log(found);

// every

const isEveryoneTeacher = users2.every((user) => user.role === "Professor");
// console.log(isEveryoneTeacher);

// some

const hasSomeTeacher = users2.some((user) => user.role === "Professor");
// console.log(hasSomeTeacher);

// sort

const numbers3 = [5, 1, 0, 8, 2];

const sortedNumbers3 = numbers3.sort();

const sortedUsers = users2.sort((a, b) => {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
});
// console.log(sortedUsers);

const sortedUsers2 = users2.sort((a, b) => a.id - b.id);
// console.log(sortedUsers2);

// reduce

const numbersToSum = [10, 20, 30, 40, 50];

// let sum = 0;
// for (let index = 0; index < numbersToSum.length; index++) {
//   sum += numbersToSum[index];
// }

const sum = numbersToSum.reduce(
  (accumulator, number) => accumulator + number,
  0,
);

// console.log(sum);

const products = [
  { name: "banana", category: "fruta" },
  { name: "alface", category: "verdura" },
  { name: "maçã", category: "fruta" },
  { name: "cenoura", category: "legume" },
  { name: "pêssego", category: "fruta" },
  { name: "couve", category: "verdura" },
];

const categories = products.reduce(
  (acc, product) => {
    acc[product.category] = acc[product.category] + 1;

    return acc;
  },
  {
    legume: 0,
    verdura: 0,
    fruta: 0,
  },
);

// const categories2 = products.reduce((acc, product) => {
//   return {
//     ...acc,
//     [product.category]: (acc[product.category] || 0) + 1,
//   };
// }, {});

console.log(categories);
