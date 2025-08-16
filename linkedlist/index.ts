class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: T) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let temp: Node<T> | null = this.head;
    let prev: Node<T> | null = this.head;

    while (temp?.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;

    if (this.tail) {
      this.tail.next = null;
    }

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value: T) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp: Node<T> | null = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return undefined;
    let temp: Node<T> | null = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
    return temp;
  }

  get(index: number) {
    if (index >= this.length || index < 0) return undefined;
    let temp: Node<T> | null = this.head;
    let i = 0;
    while (i < index && temp) {
      temp = temp.next;
      i++;
    }
    return temp;
  }

  insert(index: number, value: T) {
    if (index >= this.length || index < 0) return undefined;

    if (index === 0) {
      this.unshift(value);
    }

    let newNode = new Node(value);
    let prev: Node<T> | null = this.head;
    let i = 0;

    while (i < index - 1 && prev) {
      prev = prev.next;
      i++;
    }

    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
    return this;
  }

  set(index: number, value: T) {
    if (index >= this.length || index < 0) return undefined;
    let i = 0;
    let current: Node<T> | null = this.head;

    while (i < index && current) {
      current = current.next;
      i++;
    }

    if (current) {
      current.value = value;
    }
    return current;
  }

  size() {
    return this.length;
  }

  size2() {
    let current: Node<T> | null = this.head;
    let counter = 0;
    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const linkedList = new LinkedList<number>(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.unshift(0);
// linkedList.shift();
// linkedList.pop();
linkedList.insert(2, 28);
console.log(linkedList.size());
console.log(linkedList.size2());
