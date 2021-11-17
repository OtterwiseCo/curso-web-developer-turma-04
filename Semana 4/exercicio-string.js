/*
1. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console

2. Troque todas as vírgulas na string abaixo por ponto final:
“Olá, mundo, meu, nome, é, Juca”
*/

const ex1 = () => {
  const names = "Maria, Paulo, Moisés, Joel, Ana";
  const namesArray = names.split(",");
  for (let index = 0; index < namesArray.length; index++) {
    const name = namesArray[index].trim();
    console.log(name);
  }
};

// ex1();

const ex2 = () => {
  const str = "Olá, mundo, meu, nome, é, Juca";
  console.log(str.replace(/,/g, "."));
};

ex2();
