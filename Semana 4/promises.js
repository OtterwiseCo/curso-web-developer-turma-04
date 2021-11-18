// Promises

const p1 = () =>
  new Promise((resolve, reject) => {
    // chamada pra um servidor

    setTimeout(() => {
      reject("deu errado a primeira");
    }, 1500);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    // chamada pra um servidor

    setTimeout(() => {
      resolve("deu certo a segunda");
    }, 1500);
  });

p1()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("acabou a primeira");
  });

p2().then((data2) => console.log(data2));

// executar promises em paralelo

Promise.all([p1(), p2()]).then(([responseOne, responseTwo]) =>
  console.log(responseOne, responseTwo),
);

Promise.race([p1(), p2()]).then((data) =>
  console.log("------------------------------------------------\n", data),
);

// Funções assíncronas e tratamento de erros

const asyncFunction = async () => {
  try {
    const response = await p1();
    console.log("response", response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("acabou a execução do código");
  }
};

// asyncFunction();

const formatNumber = (value) => {
  try {
    if (typeof value !== "number")
      throw new Error("Entrada inesperada. O valor deve ser um numero");

    return value.toFixed(2);
  } catch (error) {
    console.log("deu errado o toFixed", error);
  }
};

formatNumber("10");
