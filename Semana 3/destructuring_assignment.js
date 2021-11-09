const person = {
  name: "joao",
  age: 27,
  address: {
    street: "rua tal",
    houseNumber: 123,
  },
};

const name1 = person.name;
const age1 = person.age;

const {
  name,
  age,
  address,
  address: { street, houseNumber },
} = person;

console.log(name);
console.log(age);
console.log(street);
console.log(address);

const listNames = ["joao", "Tiago", "Luka", "vagner", "sidemar"];

const [joao, tiago, luka, vagner, sidemar] = listNames;
const [, tiago2, luka2] = listNames;
// console.log(tiago2);
// console.log(luka2);

const sum = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const operations = [sum, subtract];

const [sum2, subtract2] = operations;
sum2(2, 2);

// const users = ["João", "Juca"];

// function getFirst([joao]) {
//   return joao;
// }

// const getName = ({ name }) => name;

// // console.log(getFirst(users));
// console.log(getName(person));

const users = [
  { name: "João", role: "Professor" },
  { name: "Juca", role: "Estudante" },
  { name: "Márcia", role: "Estudante" },
  { name: "Pedro", role: "Estudante" },
  { name: "Matheus", role: "Professor" },
  { name: "Júlia", role: "Estudante" },
];
const getFirstName = ([person]) => person.name;

console.log(getFirstName(users));
