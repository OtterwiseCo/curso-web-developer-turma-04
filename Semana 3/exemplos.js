// Crie uma função que recebe duas notas como argumento e retorna a média entre elas.
// Utilize arrow function e atribua a uma constante.

const mean = (numberOne, numberTwo) => (numberOne + numberTwo) / 2;

/* 1. Crie uma função que recebe uma string (com quatro possibilidades: “soma”, “subtrai”, “dividi”, “multiplica”) e 
dois números.
A função deve retornar a operação realizada informada pela string nos dois números.

Exemplo Entrada:
myFunction('soma')(3)(5)

Exemplo Saída:
8
*/

const operations = (operation) => {
  switch (operation) {
    case "soma":
      return (numberOne) => (numberTwo) => numberOne + numberTwo;
    case "subtrai":
      return (numberOne) => (numberTwo) => numberOne - numberTwo;
    case "divide":
      return (numberOne) => (numberTwo) => numberOne / numberTwo;
    case "multiplica":
      return (numberOne) => (numberTwo) => numberOne * numberTwo;
    default:
      break;
  }
};

console.log(operations("soma")(3)(5));

/*

2. Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

Exemplo Entrada:
{ name: ‘Juca’, idade: 28 }

Exemplo Saída:
Maior de idade

*/

const person = { name: "Juca", age: 28 };

const checkIfIsGreater = ({ age }) =>
  age >= 18 ? "é maior de idade" : "é menor de idade";

console.log(checkIfIsGreater(person));
