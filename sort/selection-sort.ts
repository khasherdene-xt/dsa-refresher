const selectionSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = list[minIndex];
      list[minIndex] = list[i];
      list[i] = temp;
    }
  }
  return list;
};

const list = [4, 2, 6, 5, 1, 3];
console.log(selectionSort(list));
