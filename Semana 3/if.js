const testIfIsTrue = (test) => {
  if (test) {
    return "é verdadeiro";
  } else {
    return "é falso";
  }
};

const testIfIsTrue2 = (test) => (test ? "é verdadeiro" : "é falso");

const x = 10;

console.log(x < 10 ? "é menor que 10" : "é maior ou igual a 10");

console.log(
  x < 10 ? "é menor que 10" : x === 10 ? "é igual a 10" : "é maior que 10",
);

if (x < 10) {
  console.log("é menor que 10");
} else if (x === 10) {
  console.log("é igual a 10");
} else {
  console.log("é maior que 10");
}
