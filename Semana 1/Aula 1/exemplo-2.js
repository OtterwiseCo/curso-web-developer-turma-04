// Estruturas condicionais e de comparação

// >, <, <=, >=, ==, ===, !=, !==

console.log(2 < 4);

console.log(2 != 2);

console.log("2" == 2);
console.log("2" === 2);

let myNumber = -10;

if (myNumber > 0) {
  console.log("maior que 0");
} else if (myNumber === 0) {
  console.log("é 0");
} else {
  console.log("menor que 0");
}

let operation = "soma";

switch (operation) {
  case "soma":
    console.log("soma");
    break;
  case "subtrai":
    console.log("subtrai");
    break;
  case "divide":
    console.log("divide");
    break;
  default:
    console.log("nao damos suporte a essa operação");
    break;
}

// Expressões lógicas
// AND (&&), OR (||), Not (!)

let numberToTest = -9;

if (numberToTest > 0 || numberToTest % 2 === 0) {
  console.log("é par");
} else {
  console.log("é impar ou negativo");
}

let userIsActive = false;

if (!userIsActive) {
  console.log("deu bom");
}
