class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const temp = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    if (this.tail && this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    if (temp) {
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value: T) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    const current = this.head;
    if (current) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      }
      current.next = null;
    }
    this.length--;
    return current;
  }

  reverse() {
    if (!this.head) return this;

    let current: Node<T> | null = this.head;
    this.tail = this.head;
    let prev: Node<T> | null = null;

    while (current) {
      // swap next and prev
      let temp: Node<T> | null = current.next;
      current.next = current.prev;
      current.prev = temp;

      prev = current;
      current = temp;
    }

    this.head = prev;
    return this;
  }
}

const doubleLinkedList = new DoublyLinkedList(0);
doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.push(4);
doubleLinkedList.unshift(-1);
doubleLinkedList.shift();
