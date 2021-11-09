const myArray = ["joao", 12, null, false, true, undefined, []];
let nameList = ["joao", "Tiago", "Luka", "Paulo"];

// console.log(nameList[0]);
// console.log(nameList[1]);
// console.log(nameList[2]);

nameList[0] = "joao pedro";

const myArray2 = new Array(); // ou []

for (let index = 0; index < nameList.length; index++) {
  console.log(nameList[index]);
}

// Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.

function showElements() {
  for (let index = 0; index < nameList.length; index++) {
    if (index === nameList.length - 1) return;
    console.log(nameList[index]);
  }
}

showElements();

// Tendo como array de entrada [10, 20, 30, 40, 50], multiplique cada elemento por 2 e mostre na tela ao final

let numbersArray = [10, 20, 30, 40, 50];

function multiplyByTwo(myArray) {
  for (let index = 0; index < myArray.length; index++) {
    myArray[index] = myArray[index] * 2;
  }

  console.log(myArray);
}

multiplyByTwo(numbersArray);
