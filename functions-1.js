const mainFunc = () => {
  console.log("Working...");
};

const repeatOn = (func, interval) => {
  return setInterval(func, interval);
};

const id = repeatOn(mainFunc, 1000);

setTimeout(() => {
  clearInterval(id);
}, 2500);
