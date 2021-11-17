// concat

const boys = ["joao", "tiago", "sidemar"];
const girls = ["graciele"];

const boysAndGirls = boys.concat(girls);

const boysAndGirls2 = boys.concat("graciele");

// console.log(boysAndGirls);

// join

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.join(", "));

// push

fruits.push("Kiwi");
// console.log(fruits);

// pop

fruits.pop();
// console.log(fruits);

// shift

fruits.shift();
// console.log(fruits);

// unshift

fruits.unshift("Banana");
// console.log(fruits);

// slice

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1);
console.log(citrus);

// splice

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits3);

fruits3.splice(2, 3);

console.log(fruits3);

// reverse

const counter = [1, 2, 3, 4, 5];
console.log(counter.reverse());
