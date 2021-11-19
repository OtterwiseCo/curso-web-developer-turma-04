/*

1. Crie uma função assíncrona utilizando setTimeout e chame ela duas vezes, mas chame a segunda vez
apenas após a primeira ser executada com sucesso.
2. Escreva uma função que some dois números, mas que informe um erro caso um dos números não seja do tipo “number”.

*/

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("deu certo a primeira");
    }, 1500);
  });

const ex1 = async () => {
  try {
    const response = await p1();
    console.log("response 1", response);
    const response2 = await p1();
    console.log("response 2", response2);
  } catch (error) {}
};

ex1();

const ex2 = (numberOne, numberTwo) => {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    throw new Error("Todos os argumentos devem ser números");
  }
  return numberOne + numberTwo;
};

console.log(ex2("", 2));
