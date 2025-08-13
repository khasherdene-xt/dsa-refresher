// DEFINE ARRAY
const stringArr = ["a", "b", "c", "d"];
const numberArr = [1, 2, 3, 4, 5];
const booleanArr = [true, false, true, false];
const mixedArr = ["a", 1, true, "b", 2, false, "c", { a: "a" }, ["b"]];

// CUSTOM ARRAY
class CustomArray<T> {
  length: number;
  data: Record<number, T>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  checkLength() {
    if (this.length === 0) {
      throw new Error("Index out of range");
    }
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  get(index: number) {
    if (index > this.length) {
      throw new Error("Index out of range");
    }
    return this.data[index];
  }

  pop() {
    this.checkLength();
    const value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }

  shift() {
    this.checkLength();
    const value = this.data[0];

    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    delete this.data[this.length - 1];
    this.length--;

    return value;
  }

  deleteByIndex(index: number) {
    this.checkLength();
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return item;
  }

  size() {
    return this.length;
  }
}

const customArray = new CustomArray();
console.log(customArray.push("strawberry"));
console.log(customArray.push("orange"));
console.log(customArray.push("mango"));
console.log(customArray.push("banana"));
console.log(customArray.shift());
console.log(customArray.deleteByIndex(0));
console.log(customArray.push("kiwi"));
console.log(customArray.size());
