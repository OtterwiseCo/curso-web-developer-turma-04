// métodos pra extrair partes de uma string

// slice

const myName = "joao";

// console.log(myName.slice(0, 2));

const fruits = "Apple, Banana, Kiwi";

const banana = fruits.slice(7, 13);

// console.log(banana);

// substring

const fruits2 = "Apple, Banana, Kiwi";

const banana2 = fruits2.substring(7, 13);

// console.log(banana2);

// substr

const fruits3 = "Apple, Banana, Kiwi";

const banana3 = fruits3.substr(7, 6);

// console.log(banana3);

// métodos para modificar conteúdo de uma string

// replace

const text = "Please visit MICROSOFT Microsoft!";
const newText = text.replace("Microsoft", "Otterwise");

const newText2 = text.replace(/Microsoft/i, "Otterwise");

const newText3 = text.replace(/Microsoft/gi, "Otterwise");

// console.log(newText3);

// toUpperCase

console.log("joao".toUpperCase());

// toLowerCase

console.log("JOAO".toLowerCase());

// trim

let helloWorld = "  	Hello World!      ";
console.log(helloWorld.trim());

// padStart

let text5 = "5";
let padded = text5.padStart(4, 0);

console.log(padded);

// padEnd

let text52 = "5";
let padded2 = text5.padEnd(4, 0);

console.log(padded2);

// split

const hworld = "Hello, world";
console.log(hworld.split(","));
