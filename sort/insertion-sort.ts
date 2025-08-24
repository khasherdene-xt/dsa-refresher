const insertionSort = (list: number[]) => {
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = current;
  }

  return list;
};

const list = [4, 2, 6, 5, 1, 3];
console.log(insertionSort(list));
