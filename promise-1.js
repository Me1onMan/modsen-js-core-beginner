const sequentlyPromises = async () => {
  const pr1 = new Promise((resolve) => {
    resolve("pr1");
  });

  const pr2 = new Promise((resolve) => {
    setTimeout(() => resolve("pr2"), 1000);
  });

  const pr3 = new Promise((resolve) => {
    setTimeout(() => resolve("pr3"), 2000);
  });

  await pr1.then((value) => console.log(value));
  await pr2.then((value) => console.log(value));
  await pr3.then((value) => console.log(value));
};

sequentlyPromises();
