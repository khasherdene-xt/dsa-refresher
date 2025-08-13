const palindromes = (str: string) => {
  const left = 0;
  let right = str.length - 1;
  for (let i = left; i < Math.floor(right / 2); i++) {
    if (str[i] !== str[right]) {
      return false;
    }
    right--;
  }
  return true;
};

console.log(palindromes("cddc"));
console.log(palindromes("abba"));
console.log(palindromes("Hello"));
