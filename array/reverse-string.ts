const reverseString = (str: string) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(reverseString("Hello"));
console.log(reverseString("Apple"));
