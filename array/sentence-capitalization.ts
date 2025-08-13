const sentenceCapitalization = (str: string) => {
  if (str.length === 0) return str;

  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

console.log(sentenceCapitalization("hello world"));
console.log(sentenceCapitalization("khash erdene"));
