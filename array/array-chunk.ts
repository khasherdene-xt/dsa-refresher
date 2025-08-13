const arrayChunk = (arr: number[], n: number) => {
  let result = [];
  let chunk: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % n === 0) {
      chunk.push(arr[i]);
      result.push(chunk);
      chunk = [];
    } else {
      chunk.push(arr[i]);
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }
  return result;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(arrayChunk([1, 2, 3, 4, 5], 2));
