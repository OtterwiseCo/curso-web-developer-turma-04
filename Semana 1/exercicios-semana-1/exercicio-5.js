//Tendo como informações um nome e uma idade, faça um programa que imprima no console se a pessoa é maior ou menor de idade

function isNotMinor(age) {
  if (age >= 18) {
    console.log(`é maior de idade`);
  } else {
    console.log(`é menor de idade`);
  }
}

isNotMinor(18);
