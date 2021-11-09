// escreva um programa que retorna de dois numeros qual o maior e qual deles é o menor. Caso sejam iguais, informe que eles são iguais

function maiorMenor(a, b) {
  if (a > b) {
    return `O maior numero é ${a} e o menor é ${b}`;
  } else if (a < b) {
    return `O maior numero é ${b} e o menor é ${a}`;
  } else {
    return `Os numeros são iguais`;
  }
}

console.log(maiorMenor(10, 20));
console.log(maiorMenor(20, 10));
console.log(maiorMenor(10, 10));
