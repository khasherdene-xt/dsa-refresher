class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value: T) {
    const newNode = new Node(value);
    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(): T | undefined {
    if (!this.first) return undefined;

    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      if (temp) temp.next = null;
    }
    this.length--;
    return temp.value;
  }

  min() {
    if (!this.first) return undefined;
    let current: Node<T> | null = this.first;
    let min = current.value;
    while (current.next) {
      current = current.next;
      if (current.value < min) {
        min = current.value;
      }
    }
    return min;
  }
}

const queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
console.log(queue.min());
