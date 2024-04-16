const func = () => {
  console.log("Delayed function!");
};

const delay2seconds = (func) => {
  setTimeout(func, 2000);
};

console.log("Start...");
delay2seconds(func);
