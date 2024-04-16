const findFirstUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) === i && str.indexOf(str[i]) === i)
      return str[i];
  }
  return undefined;
};

console.log(findFirstUnique("aabblf"));
