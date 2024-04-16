const getRandomNum = async () => {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  const promise = new Promise((resolve, reject) => {
    if (num >= 0 && num <= 5) setTimeout(() => resolve(num), num * 1000);
    else reject(new Error(`Num between 6 and 10: ${num}`));
  });

  const result = await promise;
  console.log(result);
};

getRandomNum();
