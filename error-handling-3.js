function errorIfSecondZero(num1, num2) {
  if (num2 === 0) throw new Error("Second parameter is zero!");
  return [num1, num2];
}

console.log(errorIfSecondZero(1, 0));
