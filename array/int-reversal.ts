const intReversal = (num: number) => {
  const strValue = num.toString();
  let result = "";
  for (let i = strValue.length - 1; i >= 0; i--) {
    result += strValue[i];
  }
  return parseInt(result);
};

console.log(intReversal(1234));
console.log(intReversal(5678));
