# Data structure

A data structure is a specific way of organizing, storing, and accessing data.

# Algorithm

A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithm.

# Big O

Big O notation helps us understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows.

# O(n)

Signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data (n).

```
function printAllElements<T>(items: T[]): void {
  for (const item of items) {
    console.log(item);
  }
}

const data = [1, 2, 3, 4, 5];
printAllElements(data); // O(n)
```

# O(1)

O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.

```
function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const data = [10, 20, 30, 40, 50];
console.log(getFirstElement(data)); // Always O(1)
```

# O(n^2)

Indicated that the algorithm's execution time grows quadratically with the size of the input data (represented by n).

```
function printAllPairs<T>(items: T[]): void {
  for (const i of items) {
    for (const j of items) {
      console.log(i, j);
    }
  }
}

const data = [1, 2, 3];
printAllPairs(data); // O(n²)
```

# O(log n)

O(log n) time complexity refers to an algorithm's runtime that grows logarithmically with the size o fthe input (represented by n). In simpler terms, as the input size increases, the time it takes for the algorithm to run increases slowly

```
function binarySearch(sortedList: number[], target: number): number {
let left = 0;
let right = sortedList.length - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (sortedList[mid] === target) {
    return mid;
  } else if (sortedList[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

return -1; // Not found
}

const data = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(data, 7)); // O(log n)
```
# dsa-refresher
