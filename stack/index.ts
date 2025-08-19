class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  first: Node<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value: T) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.first) return undefined;
    const temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}

const stack = new Stack(0);
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);
