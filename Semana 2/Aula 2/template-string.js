const myName = "joao";
const myLastName = "bretanha";

console.log(myName + " " + myLastName);

// template string

function returnLastName() {
  return "Bretanha";
}

console.log(`${myName} ${returnLastName()}`);

const numberOne = 10;
const numberTwo = numberOne * 2;

console.log(`O numero ${numberOne} é a metade do número ${numberTwo}`);
console.log("O numero " + numberOne + " é a metade do número " + numberTwo);
