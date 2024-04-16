function increaseOn10Percents(numbers) {
  const firstHalf = numbers.slice(0, Math.floor(numbers.length / 2));
  return firstHalf.reduce((sum, num) => (sum += num), 0);
}

console.log(increaseOn10Percents([4, 5, 6, 7, 8]));
