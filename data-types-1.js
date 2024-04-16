function compareValues(obj1, obj2) {
  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);

  for (let i = 0; i < values2.length; i++) {
    if (!values1.includes(values2[i])) return false;
  }
  return true;
}

const obj1 = {
  v1: 1,
  v2: "2",
  v3: "str",
  v4: 4,
};

const obj2 = {
  val1: "str",
  val2: 4,
};

const obj3 = {
  val1: "str",
  val2: 3,
};

console.log(compareValues(obj1, obj2));
console.log(compareValues(obj1, obj3));
