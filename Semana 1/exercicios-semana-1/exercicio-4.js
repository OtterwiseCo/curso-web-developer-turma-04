function calcComission(fixedSalary, totalSales, percent) {
  const comission = fixedSalary + (totalSales * percent) / 100;
  return comission;
}

console.log(calcComission(5000, 100000, 10));
