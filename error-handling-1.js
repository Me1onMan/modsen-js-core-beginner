const errorIfNotInteger = (number) => {
  if (number - Number.parseInt(number) !== 0) {
    throw new Error("Number isn't integer");
  }
  return number;
};

console.log(errorIfNotInteger(1.4));
