// Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento,
// mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você
// deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

// Exemplo de Saída:
// Nome Completo: Érico Grehs
// Idade: 29
// Data de Nascimento: 11/04/1992
// Média: 8

let name = "João";
let lastName = "Bretanha";
let birthDay = 18;
let birthMonth = 02;
let birthYear = 1994;
let firstGrade = 10;
let secondGrade = 2.5;

console.log("Nome completo: " + name + lastName);
console.log("Idade: " + (2021 - birthYear));
console.log(
  "Data de nascimento: " + birthDay + "/" + birthMonth + "/" + birthYear,
);
console.log("Média: " + (firstGrade + secondGrade) / 2);

// segunda variação

console.log(
  "Nome completo: " +
    name +
    " " +
    lastName +
    "\n" +
    "Idade: " +
    (2021 - birthYear) +
    "\n" +
    "Data de nascimento: " +
    birthDay +
    "/" +
    birthMonth +
    "/" +
    birthYear +
    "\n" +
    "Média: " +
    (firstGrade + secondGrade) / 2,
);
