const reverseString = (str: string) => {
  const stack = [];
  for (let i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join("");
};

const reversedString = reverseString("hello world");
console.log(reversedString);
