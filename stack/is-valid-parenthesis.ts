const isValidParenthesis = (str: string) => {
  if (str.length % 2 !== 0) return false;
  const stack = [];
  const leftParenthesis = ["(", "[", "{"];

  for (let i = 0; i < str.length; i++) {
    if (leftParenthesis.includes(str[i])) {
      stack.push(str[i]);
    } else {
      const lastIndex = stack.length - 1;
      if (stack[lastIndex] === "(" && str[i] === ")") {
        stack.pop();
      } else if (stack[lastIndex] === "[" && str[i] === "]") {
        stack.pop();
      } else if (stack[lastIndex] === "{" && str[i] === "}") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
};

console.log(isValidParenthesis("(){}[]"));
console.log(isValidParenthesis("([)]"));
console.log(isValidParenthesis("()"));
console.log("(");
