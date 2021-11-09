// function sayHi() {
//   console.log("hi");
// }

// sayHi();

const sayHi = function () {
  console.log("hi");
};

// sayHi();

const sum = function (numberOne, numberTwo, callback) {
  const total = numberOne + numberTwo;
  return callback(total);
};

const show = function (data) {
  console.log(data);
};

const multiply = function (numberOne) {
  return function (numberTwo) {
    return numberOne * numberTwo;
  };
};

const result = multiply(3);

// console.log(result(10));

const operations = {
  sum: function (numberOne, numberTwo) {
    return numberOne + numberTwo;
  },
  subtract: function (numberOne, numberTwo) {
    return numberOne - numberTwo;
  },
};

console.log(operations.sum(2, 2));

operations.subtract(5, 2);

const sum2 = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const operations2 = [sum2, subtract];

console.log(operations2[0](1, 2));

const sum3 = (numberOne, numberTwo) => numberOne + numberTwo;

// const show = function (data) {
//   console.log(data);
// };

const show2 = (data) => console.log(data);
