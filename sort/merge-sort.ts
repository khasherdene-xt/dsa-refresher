const mergeSort = (list: number[]): number[] => {
  if (list.length <= 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const list = [4, 2, 6, 5, 1, 3];
console.log(mergeSort(list));
