function sumOfExtremeDigits(num) {
  const strNum = num.toString();
  if (strNum.length === 1) return num;
  const rightDigit = Number.parseInt(strNum[0]);
  const leftDigit = Number.parseInt(strNum[strNum.length - 1]);
  return rightDigit + leftDigit;
}

console.log(sumOfExtremeDigits(468));
