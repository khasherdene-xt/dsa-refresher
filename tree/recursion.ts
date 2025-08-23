const countDown = (number: number) => {
  if (number === 0) return console.log(`Finally got to zero!`);
  console.log(number);
  return countDown(number - 1);
};

const factorial = (number: number): number => {
  return number === 1 ? 1 : number * factorial(number - 1);
};

countDown(10);
console.log(factorial(5));
