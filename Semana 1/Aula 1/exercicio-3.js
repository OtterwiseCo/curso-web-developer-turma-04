// Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar um valor booleano.

function isEven(num) {
  return !(num % 2);
}

function isEven2(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven3(num) {
  if (num % 2 === 0) return true;

  return false;
}

function isEven4(num) {
  if (num % 2 === 0) return true;
  if (num % 2 !== 0) return false;
}

console.log(isEven(2));
